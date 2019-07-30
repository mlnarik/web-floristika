import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

const SectionDiv = styled.div`
    padding-top: 5rem;
    `

export const ContactNow = () => (
    <SectionDiv>
        <h3>
            Rádi s Vámi prodiskutujeme Vaše představy. Těšíme se na Vás.
        </h3>
        <Link href="/kontakt">
            <Button primary size='big'>Kontaktovat a požádat o konzultaci zdarma</Button>
        </Link>
    </SectionDiv>
)