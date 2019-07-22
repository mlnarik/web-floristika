import React from 'react';

import { MainContent } from '../components/content/MainContent';
import { GalleryList } from '../components/content/GalleryList';

const Galerie = () => (
    <main>          
      <MainContent bgImgName='gallery'>
        <GalleryList />
      </MainContent>
    </main>)

export default Galerie;
