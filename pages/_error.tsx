import React from 'react';
import styled from '@emotion/styled';

const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40vh 1rem 1rem 1rem;
`;

class Error extends React.Component {
    public props: any;

    public static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    public render() {
        return (
            <CenteredDiv>
                {this.props.statusCode === 404
                    ? `Stránka není dostupná nebo nejste připojeni k internetu.`
                    : 'Stránka momentálně prochází údržbou.'}
            </CenteredDiv>
        );
    }
}

export default Error;
