import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';

const LogoHeader = styled.header`
    text-align: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    color: white;
`;

const PageLabel = styled.h1`
    font-size: 3rem;
`;

const PageSubLabel = styled.h2`
    padding-top: 2rem;
    font-size: 2rem;
`;

const ContactDiv = styled.div`
    padding-top: 10rem;
`;

export const Logo = ({ showContactButton }: { showContactButton: boolean }) => (
    <LogoHeader>
        <PageLabel>
            Svatební floristika
            <br />
            Miroslava Blatná
        </PageLabel>
        <PageSubLabel>Pro krásu ve Vašem životě</PageSubLabel>
        {showContactButton && (
            <ContactDiv>
                <Button primary size="big">
                    Kontaktovat zdarma
                </Button>
            </ContactDiv>
        )}
    </LogoHeader>
);
