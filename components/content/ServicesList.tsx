import styled from '@emotion/styled';
import { Img } from '../common/Img';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Image = (props) => (<Img large {...props}/>)

const BigFrameDiv = styled.div`
    flex: 0 0 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    `

const FrameDiv = styled.div`
    flex: 0 0 50%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1100px) {
        position: static;
        flex: 0 0 100%;
    }    
    `

const SmallFrameDiv = styled.div`
    flex: 0 0 25%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    
    @media screen and (max-width: 1100px) {
        position: static;
        flex: 0 0 50%;
    }

    @media screen and (max-width: 650px) {
        position: static;
        flex: 0 0 100%;
    }
    `

const InfoDiv = styled.div`
    position: absolute;
    right: 1%;
    top: 1%;
    width: 400px;
    padding: 0.75rem;
    border: 1px solid black;
    border-radius: 4px;
    opacity: .9;
    color: black;
    background-color: white;  
    z-index: 1;  
    text-align: left;

    @media screen and (max-width: 1100px) {
        position: static;
        width: 100%;
    }
    `

const InfoHeaderH3 = styled.h3`
    font-weight: 600;
    padding-bottom: 0.5rem;
`

export const ServicesList = () => (
    <>
        <FrameDiv>
            <Image src="/static/gallery/6.jpg" />

        </FrameDiv>
        <FrameDiv>
            <Image src="/static/gallery/9.jpg" />
            <InfoDiv>
            <InfoHeaderH3>Osobitý přístup</InfoHeaderH3>
                Floristikou se zabývám už několik let a je mou velkou zálibou a koníčkem.
                Specializuji se na svatební kytice a svatební květinovou výzdobu.
                Vše z čerstvě nařezaných a z Holandska dovezených květin.
                Podle Vašeho přání můžu udělat také květiny z lučního kvítí, případně suché vazby.
            </InfoDiv>
        </FrameDiv>
        <FrameDiv>
            <Image src="/static/gallery/11.jpg" />
            <InfoDiv>
            <InfoHeaderH3>Spokojenost je předností</InfoHeaderH3>
                Mojí snahou je docílit vždy maximální spokojenosti zákazníka i s ohledem na příznivou cenu všech vazeb.
                A to s láskou a citem pro detail a kompozici.
                Vázání svatebních kytic představuje pro mne velikou radost a potěšení.                

            </InfoDiv>            
        </FrameDiv>
        <FrameDiv>
            <Image src="/static/gallery/12.jpg" />
        </FrameDiv>
        <BigFrameDiv>
            <Image src="/static/gallery/5.jpg" />
            <InfoDiv>
                <InfoHeaderH3>Vyšperkování do posledního detailu</InfoHeaderH3>
                <p>
                    Umím udělat nejenom kytice pro nevěstu, ale i překrásné kytice družičkám, maminkám, korsáž ženichovi, svědkovi, včetně výzdoby svatební tabule, auta, oddávacího stolu a kytice na házení.
                    Podle vašeho přání mohu také vyrobit družičkám ozdobné květinové náramky.
                    Také umím udělat překrásné výzdoby něvěstám, ale i družičkám do vlasů.
                </p>
                <p>
                    Připravím Vám kompletní květinovou výzdobu objektu, kde se svatba koná (např. výzdoba lavic v kostele, oddávací bráná v zahradě apod.)
                    Zajistím výzdobu pro svatební hosty. Jedná se o svatební vývazky z myrty nebo buxusu a k nim přišpendlených mašliček.
                </p>
            </InfoDiv>
        </BigFrameDiv>
        <FrameDiv>
            <Image src="/static/gallery/3.jpg" />
            <InfoDiv>
                <InfoHeaderH3>Obřad v Botanické zahradě</InfoHeaderH3>
                Jako zaměstnanec Botanické zahrady a arboreta Mendelovy univerzity v Brně, jsem Vám schopna zajistit svatební obřad v krásném prostředí botanické zahrady.
            </InfoDiv>
        </FrameDiv>        
        <FrameDiv>
            <Image src="/static/gallery/4.jpg" />
        </FrameDiv>
        <SmallFrameDiv>
            <Image src="/static/gallery/7.jpg" />
        </SmallFrameDiv>
        <SmallFrameDiv>
            <Image src="/static/gallery/8.jpg" />
        </SmallFrameDiv>
        <SmallFrameDiv>
            <Image src="/static/gallery/2.jpg" />
        </SmallFrameDiv>
        <SmallFrameDiv>
            <Image src="/static/gallery/1.jpg" />
        </SmallFrameDiv>      
        <Link href="/galerie">
            <Button fluid style={{margin: 0}} size='big'>Podívat se do galerie na více fotek</Button>
        </Link>        
    </> 
)