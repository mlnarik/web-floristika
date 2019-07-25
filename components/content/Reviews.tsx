import styled from '@emotion/styled';

const SectionDiv = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 5rem;
    i { font-style: italic; }`

export const Reviews = () => (
    <SectionDiv>
        <h3>Ohlasy od zákazníků</h3>
        <p>
            <i>"Jako nevěsta jsem byla s Mirkou na max spokojená. Skvělá spolupráce a výsledek nad odčekávání skvělý. DĚKUJI MIRKO!"</i><br /> - <b>Iva Malá</b>
        </p>
        <p>
            <i>"Super servis, čerstvé a krásné květiny na přání, Mirka se vcítila do našho přání a naše svatební výzdoba a kytice udělaly náš velký den tím nejkrásnějším."</i><br /> - <b>Olinka Šišková</b>
        </p>
    </SectionDiv>
)