import { useState } from 'react';
import { Button, Divider, Grid, Form } from 'semantic-ui-react'

export const ContactForm = () => {
    const [state, setState] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        purpose: '',
        message: '',
    });

    const changeName = (e) => { setState({ ...state, fullName: e.target.value }) };
    const changeEmailAddress = (e) => { setState({ ...state, emailAddress: e.target.value }) };
    const changePhoneNumber = (e) => { setState({ ...state, phoneNumber: e.target.value }) };
    const changePurpose = (e) => { setState({ ...state, purpose: e.target.value }) };
    const changeMessage = (e) => { setState({ ...state, message: e.target.value }) };
    const submitForm = (e) => {
        const emailText =
            `Jméno: ${state.fullName}
            Email: ${state.emailAddress}
            Číslo: ${state.phoneNumber}
            Účel: ${state.purpose}
            Zpráva: ${state.message}`
        //TODO: sending an email
    }

    return (
        <>
            Konzultace je zcela ZDARMA. Rádi Vám poradíme a prodiskutujeme Vaše představy.
            <br />
            <br />
            <Form style={{ width: '100%' }}>
                <Grid columns={2} stackable relaxed='very'>
                    <Divider vertical>Nebo</Divider>

                    <Grid.Column textAlign='left'>
                        <Form.Input label='Vaše celé jméno' placeholder='Vložte prosím celé jméno' onChange={changeName} />
                        <Form.Input label='Emailová adresa' placeholder='Vložte prosím email' onChange={changeEmailAddress} />
                        <Form.Input label='Telefoní číslo' placeholder='Vložte prosím telefoní číslo' onChange={changePhoneNumber} />
                        <Form.Input fluid list='purposeTypes' label='Účel' placeholder='Zvolte účel' onChange={changePurpose} />
                        <datalist id='purposeTypes'>
                            <option value='Svatební obřad' />
                            <option value='Jiné' />
                        </datalist>
                        <Form.TextArea label='Vaše přání' rows='15' placeholder='Popište prosím, co by jste si přáli' onChange={changeMessage} />
                        <Button fluid primary type='submit' onClick={submitForm}>Odeslat</Button>
                    </Grid.Column>


                    <Grid.Column verticalAlign='middle'>
                        <Button fluid primary href="tel:+420731336238" size='big'>
                            Zavolat ihned na 📞 +420 731 336 238
                    </Button>
                    </Grid.Column>
                </Grid>

            </Form>
        </>);
}

