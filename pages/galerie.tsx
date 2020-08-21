import React from 'react';

import { MainLayout } from '../components/layout/MainLayout';
import { GalleryList } from '../components/content/GalleryList';
import { ContactNow } from '../components/content/ContactNow';

const Galerie = () => (
    <MainLayout bgImgName="contact" cutTop>
        <GalleryList />
        <ContactNow />
    </MainLayout>
);

export default Galerie;
