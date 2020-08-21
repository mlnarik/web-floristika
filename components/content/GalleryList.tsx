import { Img, ImgSize } from '../images/Img';
import styled from '@emotion/styled';

const GalleryDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const GalleryList = () => (
    <GalleryDiv>
        <Img previewable size={ImgSize.Medium} src="/static/gallery/7.jpg" />
        <Img previewable size={ImgSize.Medium} src="/static/gallery/8.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/9.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/10.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/1.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/3.jpg" />
        <Img previewable size={ImgSize.Medium} src="/static/gallery/2.jpg" />
        <Img previewable size={ImgSize.Medium} src="/static/gallery/4.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/5.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/6.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/11.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/12.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/13.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/14.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/15.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/16.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/17.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/18.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/19.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/20.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/21.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/22.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/23.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/24.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/25.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/26.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/27.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/28.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/29.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/30.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/31.jpg" />
        {/* <Img previewable size={ImgSize.Small} src="/static/gallery/32.jpg" /> */}
        <Img previewable size={ImgSize.Small} src="/static/gallery/33.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/34.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/35.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/36.jpg" />
        <Img previewable size={ImgSize.Small} src="/static/gallery/37.jpg" />
    </GalleryDiv>
);
