import { MainContent } from '../components/content/MainContent';
import { Contact } from '../components/content/Contact';
import { useEffect } from 'react';

const Kontakt = () => {

    useEffect(() => { document.getElementsByTagName('body')[0].scrollTop = 0; });

    return (
        <main>
            <MainContent bgImgName='contact' cutTop>
                <Contact/>
            </MainContent>
        </main>
    )
}

export default Kontakt;