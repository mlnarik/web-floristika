import React from 'react';
import styled from '@emotion/styled';

const LogoHeader = styled.header`
    text-align: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    color: white;
    `

const PageLabel = styled.h1`
    font-size: 3rem;
    `

const PageSubLabel = styled.h2`
    padding-top: 2rem;
    font-size: 2rem;
    `

export const Logo = () => (
    <LogoHeader>
        <PageLabel>Svatební floristika<br />
            Miroslava Blatná</PageLabel>
        <PageSubLabel>Pro krásu ve Vašem životě</PageSubLabel>
    </LogoHeader>)