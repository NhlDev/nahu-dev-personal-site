import { MAIL_USER, MAIL_APP_KEY } from "secrets-keys.const";

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MAIL_USER,
        pass: MAIL_APP_KEY,
    },
});

//transporter.verify().then(console.log).catch(console.error);

export const sendMail = (name: string, from: string, to: string, text: string): Promise<boolean> =>
    transporter.sendMail({
        from: `"${name}" <${from}>`,
        to,
        subject: "Mensaje de mi WEB",
        html: `<p>${text}</p><br/> <p>Responder a <a href="mailto:${from}">${from}</a></p>`
    });

