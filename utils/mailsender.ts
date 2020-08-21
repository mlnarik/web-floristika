import axios from 'axios';
const MAILER_URL = 'https://mailsender.mlnarik.vercel.app/api/sendmail';

export function sendEmail(emailAddress: string, message: string): Promise<any> {
    const data = {
        subject: 'Nová poptávka z webu',
        sender: emailAddress,
        receiver: 'mirkablatna@centrum.cz',
        message: message
    };
    return axios
        .post(MAILER_URL, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.data);
}
