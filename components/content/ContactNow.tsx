import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

const ContactDiv = styled.div`
    padding: 5rem;
`

export const ContactNow = () => (
    <ContactDiv>
    <h3>
        Rádi s Vámi prodiskutujeme Vaše představy. Tešíme se na Vás.
    </h3>
    <Link href="/kontakt">
        <Button primary size='big'>Kontaktovat a objednat konzultaci zdarma</Button>
    </Link>
</ContactDiv>
)