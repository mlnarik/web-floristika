import { Button, Divider, Grid, Form, Message } from 'semantic-ui-react';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

interface FormValues {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    purpose: string;
    message: string;
}

let formSchema = yup.object().shape<FormValues>({
    fullName: yup
        .string()
        .max(100)
        .required('Vyplňte prosím jméno'),
    emailAddress: yup
        .string()
        .email('Email není správný')
        .required('Vyplňte prosím email'),
    phoneNumber: yup
        .string()
        .matches(/^\+?\d+$/, 'Telefonní číslo není správné')
        .required('Vyplňte prosím telefonní číslo'),
    purpose: yup.string().required('Vyplňte prosím účel'),
    message: yup.string().required('Vyplňte prosím Vaší představu')
});

const initialValues: FormValues = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    purpose: '',
    message: ''
};

// eslint-disable-next-line react/display-name
const RequestForm = (isSent: boolean) => ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitCount,
    isValid
}: FormikProps<FormValues>) => (
    <Form
        style={{ width: '100%' }}
        success={isSent}
        error={submitCount > 0 && !isSent && !isValid}
        onSubmit={handleSubmit}>
        <Grid columns={2} stackable relaxed="very">
            <Divider vertical>Nebo</Divider>

            <Grid.Column textAlign="left">
                <Message
                    success
                    header="Poptávka odeslána"
                    content="Zpráva nám byla úspešně odeslána! Vyčkejte prosím na odpověď"
                />

                <Message
                    error
                    header="Vyplněné údaje nejsou správné"
                    content="Prosím pečlivě zkontrolujte údaje před odesláním"
                />

                <Form.Input
                    label="Vaše celé jméno"
                    placeholder="Vložte prosím celé jméno"
                    name="fullName"
                    error={touched.fullName && errors.fullName}
                    value={values.fullName}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Emailová adresa"
                    placeholder="Vložte prosím email"
                    name="emailAddress"
                    error={touched.emailAddress && errors.emailAddress}
                    value={values.emailAddress}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Telefoní číslo"
                    placeholder="Vložte prosím telefoní číslo"
                    name="phoneNumber"
                    error={touched.phoneNumber && errors.phoneNumber}
                    value={values.phoneNumber}
                    onChange={handleChange}
                />
                <Form.Input
                    fluid
                    list="purposeTypes"
                    label="Účel"
                    placeholder="Vložte účel"
                    name="purpose"
                    error={touched.purpose && errors.purpose}
                    value={values.purpose}
                    onChange={handleChange}
                />
                <datalist id="purposeTypes">
                    <option value="Svatební obřad" />
                    <option value="Jiný" />
                </datalist>
                <Form.TextArea
                    label="Vaše přání"
                    rows="15"
                    placeholder="Popište prosím, co by jste si přáli"
                    name="message"
                    error={touched.message && errors.message}
                    value={values.message}
                    onChange={handleChange}
                />
                <Button fluid primary type="submit" disabled={isSubmitting}>
                    Odeslat {submitCount ? 'opět' : null}
                </Button>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
                <Button fluid primary href="tel:+420731336238" size="big">
                    Zavolat ihned na 📞 +420 731 336 238
                </Button>
            </Grid.Column>
        </Grid>
    </Form>
);

export const ContactForm = () => {
    const [isSent, setSentFlag] = useState(false);

    const submitForm = (values: FormValues, { setSubmitting }) => {
        const emailText = `Jméno: ${values.fullName}
            Email: ${values.emailAddress}
            Číslo: ${values.phoneNumber}
            Účel: ${values.purpose}
            Zpráva: ${values.message}`;
        //TODO: sending an email
        console.log('Sending an email');

        setSentFlag(true);
        setSubmitting(false);
    };

    return (
        <>
            Konzultace je zcela ZDARMA. Rádi Vám poradíme a prodiskutujeme Vaše
            představy.
            <br />
            <br />
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={submitForm}>
                {RequestForm(isSent)}
            </Formik>
        </>
    );
};
