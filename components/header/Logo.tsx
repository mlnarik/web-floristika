import React from 'react';
import styled from '@emotion/styled';

const LogoDiv = styled.div`
    display: block;
    flex: 0 0 auto;

    //background-image: url('/static/logo2.png');
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    color: white;
    font-size: 3rem;    
`

export const Logo = () => (
    <LogoDiv>
        Floristika<br />
        Miroslava Blatná
    </LogoDiv>)