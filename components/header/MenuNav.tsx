import styled from '@emotion/styled';
import Link from 'next/link';

const CenteredNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;`;

const StickyDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  height: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem;


  text-align: center;  
  color: #333333;
  font-size: 1.3rem;
  font-weight: 600;
  z-index: 2;
  opacity: .9;

  border-radius: 0 0 10px 10px;
  background-color: white;
`

const LinkA = styled.a`
    text-decoration: none;
    color: inherit;
    width: 100%;
`

const MenuDiv = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
`

const MenuItem = styled.li`
    display: block;    
    flex: 0 0 20%;
    margin: 0;
    padding: 0 3rem;    
    list-style-type: none;
    
    @media screen and (max-width: 600px) {
        padding: 0.75rem;
    }    
`

export const MenuNav = () => (
    <StickyDiv>
        <CenteredNav>
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
            </MenuDiv>
        </CenteredNav>
    </StickyDiv>
)