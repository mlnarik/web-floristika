import React from 'react';

import { MainContent } from '../components/content/MainContent';
import { GalleryList } from '../components/content/GalleryList';

const Galerie = () => (
    <main>          
      <MainContent bgImgName='contact' cutTop>
        <GalleryList />
      </MainContent>
    </main>)

export default Galerie;
