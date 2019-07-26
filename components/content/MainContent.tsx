import React from 'react';
import styled from '@emotion/styled';
import { Logo } from '../header/Logo';

const ParallaxedImage = styled<'div', any>('div')`
    position: relative;

    height: ${props => props.cutTop ? 'auto' : '55vh'};
    min-height: 22rem;
    padding-top: 5rem;

    text-align: middle;
    margin: 0 auto;

    &::after {
        position: fixed;
        content: "";
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

`    
const BackgroundDiv = styled.div`
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
    `
 

export const MainContent = (props) => {
    const url = `/static/header/${props.bgImgName}.jpg`;
    return (
        <div>
            <ParallaxedImage url={url} cutTop={props.cutTop}>
                <Logo />
            </ParallaxedImage>
            <BackgroundDiv>
                {props.children}
            </BackgroundDiv>
        </div>);
}