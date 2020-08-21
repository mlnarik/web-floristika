import React from 'react';

import { MainLayout } from '../components/layout/MainLayout';
import { ServicesList } from '../components/content/ServicesList';
import { Reviews } from '../components/content/Reviews';
import { ContactNow } from '../components/content/ContactNow';

const App = () => (
    <MainLayout bgImgName="index">
        <ServicesList />
        <Reviews />
        <ContactNow />
    </MainLayout>
);

export default App;
