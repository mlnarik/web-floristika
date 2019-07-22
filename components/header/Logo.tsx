import React from 'react';
import styled from '@emotion/styled';

const LogoDiv = styled.div`
    display: block;
    flex: 0 0 auto;

    //background-image: url('/static/logo2.png');
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    color: white;
`

const PageLabel = styled.h1`
    font-size: 3rem;    
`

const PageSubLabel = styled.h2`
    padding-top: 10rem;
    font-size: 2rem;        
`

export const Logo = () => (
    <LogoDiv>
        <PageLabel>Svatební floristika<br />
        Miroslava Blatná</PageLabel>
        <PageSubLabel>Pro krásu ve Vašem životě</PageSubLabel>
    </LogoDiv>)