import LazyLoadingImg from 'react-image';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { openModal } from '../../actions';
import { useDispatch } from 'react-redux';

const StyledImg = styled(LazyLoadingImg)`
    display: block;
    border: 1px solid white;
    border-radius: 4px;
    width: 100%;
`;

const AutoSizedDiv = styled.div`
    max-width: 100%;
    max-height: 100%;
`;

const LargeSizedDiv = styled.div`
    width: 100%;
`;

const MediumSizedDiv = styled.div`
    width: 50%;

    @media screen and (max-width: 1100px) {
        width: 100%;
    }
`;

const SmallSizedDiv = styled.div`
    width: 25%;
    height: 25%;

    @media screen and (max-width: 1100px) {
        width: 50%;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

const ImageLoadingPlaceholder = styled(Placeholder)`
    width: 100%;
    max-width: initial !important;
    border: 1px solid white;
    border-radius: 4px;
`;

export const Img = (props: {
    src: string;
    hideLoading?: boolean;
    fit?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    previewable?: boolean;
    onClick?: Function;
}) => {
    const [isLoading, setLoadingStatus] = useState(!props.hideLoading);
    const dispatch = useDispatch();

    const loadingFinished = () => {
        setLoadingStatus(false);
    };

    const showImagePreview = () => {
        if (props.previewable) {
            dispatch(openModal(props.src));
        }
    };

    let ImageFrame;

    if (props.fit) {
        ImageFrame = AutoSizedDiv;
    } else if (props.small) {
        ImageFrame = SmallSizedDiv;
    } else if (props.large) {
        ImageFrame = LargeSizedDiv;
    } else {
        ImageFrame = MediumSizedDiv;
    }

    return (
        <ImageFrame>
            <StyledImg
                src={props.src}
                onClick={showImagePreview}
                onLoad={loadingFinished}
                style={{
                    display: isLoading ? 'none' : null,
                    cursor: props.previewable ? 'pointer' : null
                }}
            />
            {isLoading && (
                <ImageLoadingPlaceholder>
                    <Placeholder.Image square />
                </ImageLoadingPlaceholder>
            )}
        </ImageFrame>
    );
};
