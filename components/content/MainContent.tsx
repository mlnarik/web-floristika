import React, { Props } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../header/Logo';

const ParallaxDiv = styled.div`
  transform-style: preserve-3d;
`

const ParallaxedImage = styled<'div', any>('div')`
    position: relative;

    height: 70vh;
    padding-top: 5rem;

    text-align: middle;
    margin: 0 auto;

    &::after {
        position: fixed;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        min-width: 2000px;        
        transform: translateY(150px) translateZ(-3px) scale(4.5);

        background: url(${props => props.url}) center no-repeat;
        background-size: 100%;   
        background-origin: 50% 50%;
        z-index: -1;
    }

`    
const BackgroundDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem;

    background-color: white;
    border-radius: 10px;
    `
 

export const MainContent = (props) => {
    const url = `/static/header/${props.bgImgName}.jpg`;
    return (
        <ParallaxDiv>
            <ParallaxedImage url={url}>
                <Logo />
            </ParallaxedImage>
            <BackgroundDiv>
                {props.children}
            </BackgroundDiv>
        </ParallaxDiv>);
}