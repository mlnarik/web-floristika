import LazyLoadingImg from 'react-image'
import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { ModalContext } from '../content/MainContent';

const StyledImg = styled(LazyLoadingImg)`
    display: block;
    border: 1px solid white;
    border-radius: 4px;
    width: 100%;
    cursor: ${props => props.clickable === 'true' ? 'pointer': 'initial'};
    `

const AutoSizedDiv = styled.div`
    max-width: 100%;
    max-height: 100%;`

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

    const [isLoading, setLoadingStatus] = useState(!props.hideLoading);

    const modalContext = useContext(ModalContext);

    const loadingFinished = () => {
        setLoadingStatus(false);
    }
    const showEnlargedImage = () => {
        if (props.previewable) {
            modalContext.showModal(props.src);
        }
    }

    let ImageFrame;

    if (props.fit) {
        ImageFrame = ({children}) => <AutoSizedDiv>{children}</AutoSizedDiv>;
    } else if (props.small) {
        ImageFrame = ({children}) => <SmallSizedDiv>{children}</SmallSizedDiv>;
    } else if (props.large) {
        ImageFrame = ({children}) => <LargeSizedDiv>{children}</LargeSizedDiv>;
    } else {
        ImageFrame = ({children}) => <MediumSizedDiv>{children}</MediumSizedDiv>;
    }


    return (
    <ImageFrame>
        <StyledImg src={props.src} onClick={() => showEnlargedImage()} onLoad={loadingFinished} clickable={props.previewable ? 'true' : 'false'} style={{ display: isLoading ? 'none' : 'inherit' }} />
        {isLoading ? 
        <CustomPlaceholder>
            <Placeholder.Image square />
        </CustomPlaceholder> : <div />}
    </ImageFrame>);
}