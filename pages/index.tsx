import React from 'react';

import { MainContent } from '../components/content/MainContent';
import styled from '@emotion/styled';

const MainDiv = styled.div`
  text-align: center;
  margin: 0 auto;`

function App() {
  return (
    <div className="App">
      <MainDiv>          
        <MainContent />
      </MainDiv>
    </div>
  );
}

export default App;
