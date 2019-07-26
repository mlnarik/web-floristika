import React from 'react';

import { MainContent } from '../components/content/MainContent';
import { ServicesList } from '../components/content/ServicesList';
import { Reviews } from '../components/content/Reviews';
import { ContactNow } from '../components/content/ContactNow';

const App = () => (
    <main>          
      <MainContent bgImgName='index'>
        <ServicesList />
        <Reviews />
        <ContactNow />
      </MainContent>
    </main>)

export default App;
