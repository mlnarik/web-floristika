import React from 'react';
import styled from '@emotion/styled';
import { Logo } from '../header/Logo';

const ParallaxedImage = styled<'div', any>('div')`
  position: relative;

  height: ${props => props.cutTop ? 'auto' : '55vh'};
  min-height: 22rem;
  padding-top: 5rem;

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
  }`

const ParallaxContainer = styled.div`
  height: 100vh;
  width: 100vw;
  
  transform-style: preserve-3d;
  overflow-x: hidden;
  overflow-y: auto;  
  perspective: 1px;

  @supports (display:-ms-grid) { 
      transform-style: flat;
      perspective: 0px;
  }  
`

const BackgroundMain = styled.main`
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
  `


export const MainContent = (props) => {
  const url = `/static/header/${props.bgImgName}.jpg`;
  return (
    <ParallaxContainer>
      <ParallaxedImage url={url} cutTop={props.cutTop}>
        <Logo />
      </ParallaxedImage>
      <BackgroundMain>
        {props.children}
      </BackgroundMain>
    </ParallaxContainer>);
}