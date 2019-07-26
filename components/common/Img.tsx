import LazyLoadingImg from 'react-image'
import styled from '@emotion/styled';
import { useState } from 'react';

const PrettyImage = styled(LazyLoadingImg)`
    display: inline-block;
    border: 1px solid white;
    border-radius: 4px;`

const LargeImage = styled(PrettyImage)`
    width: 100%;`

const Image = styled(PrettyImage)`
    width: 50%;

    @media screen and (max-width: 1100px) {
        width: 100%;
    }    
    `
const SmallImage = styled(PrettyImage)`
    width: 25%;
    height: 25%;

    @media screen and (max-width: 1100px) {
        width: 50%;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
    }       
    `

// const Modal = styled.div`
//     display: block;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;

//     background-color: black;
//     opacity: .6;
//     z-index: 2;`

// const ModalDialog = (props) => (
//     <Modal>
//         bla
//     </Modal>
// )

export const Img = (props) => {

    const [size, setSize] = useState(props.small ? 'small' : props.large ? 'large' : 'normal');

    const enlargePicture = (e) => {
        //setSize('large');
    };

    if (size === 'small') {
        return <SmallImage src={props.src} onClick={enlargePicture} />;
    } else if (size === 'large') {
        return <LargeImage src={props.src} onClick={enlargePicture} />;
    } else {
        return (
            <Image src={props.src} onClick={enlargePicture} />
        );
    }
}

