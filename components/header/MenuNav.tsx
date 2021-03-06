import styled from '@emotion/styled';
import Link from 'next/link';
import { breakpoints } from '../../utils/constants/breakpoints';

const StickyDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.75rem;

    text-align: center;
    color: #333333;
    font-size: 1.3rem;
    font-weight: 600;
    z-index: 2;
    opacity: 0.9;

    border-radius: 0 0 10px 10px;
    background-color: white;
`;

const LinkA = styled.a`
    text-decoration: none;
    color: inherit;
    width: 100%;
`;

const MenuDiv = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;

    @supports (display: -ms-grid) {
        justify-content: space-around;
    }
`;

const MenuItem = styled.li`
    display: block;
    flex: 0 0 20%;
    margin: 0;
    padding: 0 3rem;
    list-style-type: none;

    @media screen and (max-width: ${breakpoints.mobile}) {
        padding: 0.75rem;
    }
`;

export const MenuNav = () => (
    <StickyDiv>
        <MenuDiv>
            <MenuItem>
                <Link href="/">
                    <LinkA href="">Služby</LinkA>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/galerie">
                    <LinkA href="">Galerie</LinkA>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/kontakt">
                    <LinkA href="">Kontakt</LinkA>
                </Link>
            </MenuItem>
        </MenuDiv>
    </StickyDiv>
);
