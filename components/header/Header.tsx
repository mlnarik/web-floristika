import styled from '@emotion/styled';
import { Menu } from './Menu';

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;`;

const StickyHeader = styled.header`
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
export const Header = () => (
    <StickyHeader>
        <CenteredDiv>
            <Menu />
        </CenteredDiv>
    </StickyHeader>
)