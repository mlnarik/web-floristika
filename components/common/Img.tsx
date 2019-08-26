import LazyLoadingImg from 'react-image';
import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { ModalControlContext } from '../content/MainContent';

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

const withSizedImg = ({ fit, small, large }) => {
    if (fit) {
        return AutoSizedDiv;
    } else if (small) {
        return SmallSizedDiv;
    } else if (large) {
        return LargeSizedDiv;
    } else {
        return MediumSizedDiv;
    }
};

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

    const modalControlContext = useContext(ModalControlContext);

    const loadingFinished = () => {
        setLoadingStatus(false);
    };

    const showImagePreview = () => {
        if (props.previewable) {
            modalControlContext.showImagePreview(props.src);
        }
    };

    const ImageFrame = withSizedImg(props as any);

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
