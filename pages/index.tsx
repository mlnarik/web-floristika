import React from 'react';

import { MainContent } from '../components/content/MainContent';
import { ServicesList } from '../components/content/ServicesList';
import { Reviews } from '../components/content/Reviews';
import { ContactNow } from '../components/content/ContactNow';

const App = () => (
  <MainContent bgImgName='index'>
    <ServicesList />
    <Reviews />
    <ContactNow />
  </MainContent>)

export default App;
