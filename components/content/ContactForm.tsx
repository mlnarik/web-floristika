import { useState } from 'react';
import { Button, Divider, Grid, Form, Message } from 'semantic-ui-react';

const MAILER_URL = 'https://mailsender.mlnarik.now.sh/api/sendmail';

function sendEmail(emailAddress: string, message: string): Promise<any> {
    const data = {
        subject: 'Nová poptávka z webu',
        sender: emailAddress,
        receiver: 'mirkablatna@centrum.cz',
        message: message
    };
    return fetch(MAILER_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export const ContactForm = () => {
    const [formInputs, setFormInputs] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        purpose: '',
        message: '',
        sent: false,
        error: false
    });

    const [formErrors, setFormErrors] = useState<any>({
        fullName: false,
        emailAddress: false,
        phoneNumber: false,
        purpose: false,
        message: false
    });

    const validateName = value => {
        return !value;
    };
    const validateEmailAddress = value => {
        const emailValidation = /^\S+@\S+\.\S+$/g;
        return !emailValidation.test(value);
    };
    const validatePhoneNumber = value => {
        const phoneValidation = /^\+?\d+$/;
        return !phoneValidation.test(value);
    };
    const validatePurpose = value => {
        return !value;
    };
    const validateMessage = value => {
        return !value;
    };
    const validateForm = () => {
        const validationResult = {
            fullName: validateName(formInputs.fullName),
            emailAddress: validateEmailAddress(formInputs.emailAddress),
            phoneNumber: validatePhoneNumber(formInputs.phoneNumber),
            purpose: validatePurpose(formInputs.purpose),
            message: validateMessage(formInputs.message)
        };

        setFormErrors(validationResult);

        return Object.values(validationResult).find(x => x);
    };

    const changeName = e => {
        const value = e.target.value;
        setFormErrors({ ...formErrors, fullName: validateName(value) });
        setFormInputs({ ...formInputs, fullName: value });
    };
    const changeEmailAddress = e => {
        const value = e.target.value;
        setFormErrors({
            ...formErrors,
            emailAddress: validateEmailAddress(value)
        });
        setFormInputs({ ...formInputs, emailAddress: value });
    };
    const changePhoneNumber = e => {
        const value = e?.target.value;
        setFormErrors({
            ...formErrors,
            phoneNumber: validatePhoneNumber(value)
        });
        setFormInputs({ ...formInputs, phoneNumber: value });
    };
    const changePurpose = e => {
        const value = e.target.value;
        setFormErrors({ ...formErrors, purpose: validatePurpose(value) });
        setFormInputs({ ...formInputs, purpose: value });
    };
    const changeMessage = e => {
        const value = e.target.value;
        setFormErrors({ ...formErrors, message: validateMessage(value) });
        setFormInputs({ ...formInputs, message: value });
    };

    const submitForm = e => {
        if (!validateForm()) {
            const emailText =
                'Jméno: ' +
                formInputs.fullName +
                '\nEmail: ' +
                formInputs.emailAddress +
                '\nČíslo: ' +
                formInputs.phoneNumber +
                '\nÚčel: ' +
                formInputs.purpose +
                '\nZpráva: ' +
                formInputs.message;

            sendEmail(formInputs.emailAddress, emailText)
                .then(() => {
                    setFormInputs({ ...formInputs, sent: true, error: false });
                })
                .catch(() => {
                    setFormInputs({ ...formInputs, sent: false, error: true });
                });
        }
    };

    return (
        <>
            Konzultace je zcela ZDARMA. Rádi Vám poradíme a prodiskutujeme Vaše
            představy.
            <br />
            <br />
            <Form
                style={{ width: '100%' }}
                success={formInputs.sent}
                error={formInputs.error}
                onSubmit={submitForm}>
                <Grid columns={2} stackable relaxed="very">
                    <Divider vertical>Nebo</Divider>

                    <Grid.Column textAlign="left">
                        <Message
                            success
                            header="Poptávka odeslána"
                            content="Zpráva nám byla úspěšně odeslána! Vyčkejte prosím na odpověď"
                        />

                        <Message
                            error
                            header="Poptávka nebyla odeslána"
                            content="Došlo k technické chybě. Prosím napište na mirkablatna@centrum.cz nebo zavolejte. Děkujeme"
                        />

                        <Form.Input
                            label="Vaše celé jméno"
                            placeholder="Vložte prosím celé jméno"
                            error={formErrors.fullName}
                            value={formInputs.fullName}
                            onChange={changeName}
                        />
                        <Form.Input
                            label="Emailová adresa"
                            placeholder="Vložte prosím email"
                            error={formErrors.emailAddress}
                            value={formInputs.emailAddress}
                            onChange={changeEmailAddress}
                        />
                        <Form.Input
                            label="Telefonní číslo"
                            placeholder="Vložte prosím telefonní číslo"
                            error={formErrors.phoneNumber}
                            value={formInputs.phoneNumber}
                            onChange={changePhoneNumber}
                        />
                        <Form.Input
                            fluid
                            list="purposeTypes"
                            label="Účel"
                            placeholder="Vložte účel"
                            error={formErrors.purpose}
                            value={formInputs.purpose}
                            onChange={changePurpose}
                        />
                        <datalist id="purposeTypes">
                            <option value="Svatební obřad" />
                            <option value="Jiný" />
                        </datalist>
                        <Form.TextArea
                            label="Vaše přání"
                            rows="15"
                            placeholder="Popište prosím, co by jste si přáli"
                            error={formErrors.message}
                            value={formInputs.message}
                            onChange={changeMessage}
                        />
                        <Button fluid primary>
                            Odeslat {formInputs.sent && 'opět'}
                        </Button>
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle">
                        <Button
                            fluid
                            primary
                            href="tel:+420731336238"
                            size="big">
                            Zavolat ihned na 📞 +420 731 336 238
                        </Button>
                    </Grid.Column>
                </Grid>
            </Form>
        </>
    );
};
