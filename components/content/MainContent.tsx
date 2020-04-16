import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../header/Logo';
import { Img } from '../common/Img';

const ParallaxedImage = styled<'div', { url: string; cutTop?: boolean }>('div')`
    position: relative;

    height: ${props => (props.cutTop ? 'auto' : '55vh')};
    min-height: 22rem;
    padding-top: 5rem;

    &::after {
        position: fixed;
        content: '';
        top: 0;
        left: -10px;
        right: -10px;
        height: 100vh;
        transform: translateZ(-1px) scale(2);

        background: url(${props => props.url}) center no-repeat;
        background-size: cover;
        background-position: 50%;
        z-index: -1;
    }
`;

const ParallaxContainer = styled.div`
    height: 100vh;
    width: 100vw;

    transform-style: preserve-3d;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 1px;

    @supports (display: -ms-grid) {
        transform-style: flat;
        perspective: 0px;
    }
`;

const PageContentMain = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;

    width: 100vw;
    max-width: 1200px;
    min-width: 300px;
    margin: 0 auto;
    padding: 5rem;

    background-color: white;
    border-radius: 10px;

    @media screen and (max-width: 650px) {
        padding: 1rem;
    }
`;

const ImageModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    * {
        cursor: pointer;
    }

    &:before {
        position: fixed;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        opacity: 0.8;
        z-index: -1;
        cursor: pointer;
    }
`;

export const ModalControlContext = React.createContext<any>(null);

export const MainContent = (props: {
    cutTop?: boolean;
    bgImgName: string;
    children: any;
}) => {
    const [modalState, setModalState] = useState({ isOpen: false, url: '' });

    const closeModal = () => {
        setModalState({ isOpen: false, url: '' });
    };

    const openModal = url => {
        setModalState({ isOpen: true, url: url });
    };

    const url = `/static/header/${props.bgImgName}.jpg`;
    return (
        <ModalControlContext.Provider
            value={{
                showImagePreview: openModal
            }}>
            <ParallaxContainer>
                <ParallaxedImage url={url} cutTop={props.cutTop}>
                    <Logo showContactButton={false} />
                </ParallaxedImage>
                <PageContentMain>{props.children}</PageContentMain>
            </ParallaxContainer>
            {modalState.isOpen && (
                <ImageModal onClick={closeModal}>
                    <Img
                        fit
                        hideLoading
                        src={modalState.url}
                        onClick={closeModal}
                    />
                </ImageModal>
            )}
        </ModalControlContext.Provider>
    );
};
