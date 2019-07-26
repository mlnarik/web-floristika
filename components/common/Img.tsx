import LazyLoadingImg from 'react-image'
import styled from '@emotion/styled';
import { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';

const StyledImg = styled(LazyLoadingImg)`
    display: block;
    border: 1px solid white;
    border-radius: 4px;
    width: 100%;`

const ImageModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &:before {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        opacity: .5;        
    }
    `    

const LargeSizedDiv = styled.div`
    width: 100%;`

const MediumSizedDiv = styled.div`
    width: 50%;

    @media screen and (max-width: 1100px) {
        width: 100%;
    }    
    `
const SmallSizedDiv = styled.div`
    width: 25%;
    height: 25%;

    @media screen and (max-width: 1100px) {
        width: 50%;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
    }       
    `

const CustomPlaceholder = styled(Placeholder)`
    width: 100%;
    max-width: initial !important;
    border: 1px solid white;
    border-radius: 4px;
`

export const Img = (props) => {

    const [size, setSize] = useState(props.small ? 'small' : props.large ? 'large' : 'normal');
    const [modalVisible, showModal] = useState(false);
    const [isLoading, setLoadingStatus] = useState(true);

    const loadingFinished = () => setLoadingStatus(false);

    let ImageFrame;

    if (size === 'small') {
        ImageFrame = ({children}) => <SmallSizedDiv>{children}</SmallSizedDiv>;
    } else if (size === 'large') {
        ImageFrame = ({children}) => <LargeSizedDiv>{children}</LargeSizedDiv>;
    } else {
        ImageFrame = ({children}) => <MediumSizedDiv>{children}</MediumSizedDiv>;
    }


    return (
    <ImageFrame>
        <StyledImg src={props.src} onClick={() => showModal(true)} onLoad={loadingFinished} />
        {isLoading ? 
        <CustomPlaceholder>
            <Placeholder.Image square />
        </CustomPlaceholder> : <div />}
        {modalVisible ? 
        <ImageModal>
            <StyledImg src={props.src} onClick={() => showModal(false)} />
        </ImageModal> : <div />
        }
    </ImageFrame>);
}