import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const LinkA = styled.a`
    text-decoration: none;
    color: inherit;
`

const MenuDiv = styled.ul`
    display: flex;
`

const MenuItem = styled.li`
    display: inline;
    margin: 0;
    padding: 0 3rem;    
    list-style-type: none;
    
    @media screen and (max-width: 600px) {
        padding: 0.75rem;
    }    
`

export const Menu = () => {
    return (
    <MenuDiv>
        <MenuItem>
            <Link href="/"><LinkA href="">Služby</LinkA></Link>
        </MenuItem>
        <MenuItem>
            <Link href="/galerie"><LinkA href="">Galerie</LinkA></Link>
        </MenuItem>        
        <MenuItem>
            <Link href="/kontakt"><LinkA href="">Kontakt</LinkA></Link>
        </MenuItem>
    </MenuDiv>)
}