import React from 'react';

import { MainContent } from '../components/content/MainContent';
import { GalleryList } from '../components/content/GalleryList';
import { ContactNow } from '../components/content/ContactNow';

const Galerie = () => (
    <MainContent bgImgName="contact" cutTop>
        <GalleryList />
        <ContactNow />
    </MainContent>
);

export default Galerie;
