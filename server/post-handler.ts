import { PRIVATE_KEYS } from "secrets-keys.const";
import { sendMail } from "./mail-sender";

function testVerification(recaptchaToken: string) {
    const secretKey = PRIVATE_KEYS.RECAPTCHA_SERVER_SECRET;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
  
    return fetch(verificationURL, { method: 'POST' })
      .then((rawResponse) => rawResponse.json())
      .then((googleResponse) => {
        return googleResponse.success;
      });
  }

export const PostHandler = (req: any, res: any) => {

    console.log(req.body);

    switch (req.url) {
      case '/api/send-message':
        if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
          return res.status(400).send({ success: false, message: "captcha verification missing" });
        }

        return testVerification(req.body['g-recaptcha-response'])
          .then((isHuman) => {
            if (isHuman) {
              return sendMail(req.body['name'], req.body['email'], PRIVATE_KEYS.MAIL_USER, req.body['messageBody'])
                .then((info) => { return res.status(200).send({ success: true, message: "OK" }); })
                .catch(() => { return res.status(404).send({ success: false, message: "mail error" }); });
            }
            else {
              return res.status(401).send({ success: false, message: "captcha verification failed" })
            }
          });

      default:
        return res.status(404).send({ success: false, message: "not found" })
    }
  }