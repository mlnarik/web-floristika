import LazyLoadingImg from 'react-image';
import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { ModalControlContext } from '../layout/MainLayout';
import { breakpoints } from '../../utils/constants/breakpoints';

export enum ImgSize {
    Fit,
    Small,
    Medium,
    Large
}

export enum ImgCover {
    Contain,
    Cover
}

const maxHeight = 256;

const StyledImg = styled(LazyLoadingImg)`
    display: block;
    padding: 1px;
    border-radius: 4px;
    width: 100%;
    image-orientation: from-image;
`;

const AutoSizedDiv = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100%;
`;

const LargeSizedDiv = styled.div`
    width: 100%;
    max-height: ${maxHeight * 4}px;
    overflow: hidden;
`;

const MediumSizedDiv = styled.div`
    width: 50%;
    max-height: ${maxHeight * 2}px;
    overflow: hidden;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        max-height: ${maxHeight * 4}px;
    }
`;

const SmallSizedDiv = styled.div`
    width: 25%;
    max-height: ${maxHeight * 1}px;
    overflow: hidden;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
        max-height: ${maxHeight * 2}px;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
        max-height: ${maxHeight * 4}px;
    }
`;

const ImageLoadingPlaceholder = styled(Placeholder)`
    width: 100%;
    max-width: initial !important;
    border: 1px solid white;
    border-radius: 4px;
`;

const withSizedImg = (size?: ImgSize) => {
    switch (size) {
        case ImgSize.Small:
            return SmallSizedDiv;
            break;
        case ImgSize.Medium:
            return MediumSizedDiv;
            break;
        case ImgSize.Large:
            return LargeSizedDiv;
            break;
        case ImgSize.Fit:
            return AutoSizedDiv;
            break;
        default:
            return AutoSizedDiv;
    }
};

interface Props {
    src: string;
    hideLoading?: boolean;
    size?: ImgSize;
    cover?: ImgCover;
    previewable?: boolean;
    onClick?: Function;
}

export const Img = (props: Props) => {
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

    const ImageFrame = withSizedImg(props.size);

    return (
        <ImageFrame>
            <StyledImg
                src={props.src}
                onClick={showImagePreview}
                onLoad={loadingFinished}
                style={{
                    display: isLoading ? 'none' : undefined,
                    cursor: props.previewable ? 'pointer' : undefined,
                    objectFit:
                        props.cover === ImgCover.Contain ? 'contain' : 'cover'
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
