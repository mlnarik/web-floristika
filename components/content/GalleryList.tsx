import styled from '@emotion/styled';
import { ContactNow } from './ContactNow';
import Img from 'react-image'

const Image = styled(Img)`
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    width: 50%;

    @media screen and (max-width: 1100px) {
        position: static;
        width: 100%;
    }    
    `
const SmallImage = styled(Img)`
    display: inline-block;

    border: 1px solid black;
    border-radius: 4px;
    width: 25%;
    height: 25%;

    @media screen and (max-width: 1100px) {
        position: static;
        width: 50%;
    }

    @media screen and (max-width: 650px) {
        position: static;
        width: 100%;
    }       
    `


export const GalleryList = () => (
    <>
    <Image src="/static/gallery/7.jpg" />
    <Image src="/static/gallery/8.jpg" />  
    <SmallImage src="/static/gallery/9.jpg" />
    <SmallImage src="/static/gallery/11.jpg" />
    <SmallImage src="/static/gallery/3.jpg" />
    <SmallImage src="/static/gallery/4.jpg" />
    <Image src="/static/gallery/1.jpg" />
    <Image src="/static/gallery/2.jpg" />
    <SmallImage src="/static/gallery/10.jpg" /> 
    <SmallImage src="/static/gallery/5.jpg" />    
    <SmallImage src="/static/gallery/6.jpg" />
    <SmallImage src="/static/gallery/12.jpg" />
    <ContactNow />
    </>
)