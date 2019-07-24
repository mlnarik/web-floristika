import styled from '@emotion/styled';

const SectionDiv = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 5rem;
    i { font-style: italic; }`

export const Reviews = () => (
    <SectionDiv>
        <div>
            <h3>Ohlasy od zákazníků</h3>
            <p>
                <i>"Jako nevěsta jsem byla s Mirkou na max spokojená. Skvělá spolupráce a výsledek nad odčekávání skvělý. DĚKUJI MIRKO!"</i> - <b>Iva Malá</b>
            </p>
            <p>
                <i>"Jako nevěsta jsem byla s Mirkou na max spokojená. Skvělá spolupráce a výsledek nad odčekávání skvělý. DĚKUJI MIRKO! duplicate 2"</i> - <b>Iva Malá</b>
            </p>
            <p>
                <i>"Jako nevěsta jsem byla s Mirkou na max spokojená. Skvělá spolupráce a výsledek nad odčekávání skvělý. DĚKUJI MIRKO! duplicate 3"</i> - <b>Iva Malá</b>
            </p>
        </div>
    </SectionDiv>
)