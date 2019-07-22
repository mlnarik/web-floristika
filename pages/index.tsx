import React from 'react';

import { MainContent } from '../components/content/MainContent';
import { ServicesList } from '../components/content/ServicesList';

const App = () => (
    <main>          
      <MainContent bgImgName='index'>
        <ServicesList />
      </MainContent>
    </main>)

export default App;
