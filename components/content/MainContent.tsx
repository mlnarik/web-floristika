import React from 'react';
import styled from '@emotion/styled';
import { Logo } from '../header/Logo';
import { InfoImages } from './InfoImages';

const ParallaxDiv = styled.div`
  transform-style: preserve-3d;
`

const ParallaxedImage = styled.div`
    position: relative;

    height: 70vh;
    padding-top: 5rem;

    text-align: middle;
    margin: 0 auto;

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        min-width: 1400px;        
        transform: translateY(150px) translateZ(-3px) scale(4.5);

        background: url('/static/header.jpg') center no-repeat;
        background-size: 100%;   
        background-origin: 50% 50%;
        background-clip: content-box;
    }

    /* &::before {
        position: absolute;
        content: "";
        top: 90%;
        left: 0;
        right: 0;
        bottom: 0;        
        background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
    } */
`    

 

export const MainContent = () => (
    <>
    <ParallaxDiv>
        <ParallaxedImage>
            <Logo />
        </ParallaxedImage>
        <InfoImages />
    </ParallaxDiv>
    </>
)