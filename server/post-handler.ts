import { RECAPTCHA_SERVER_SECRET, MAIL_USER } from "secrets-keys.const";
import { sendMail } from "./mail-sender";

function testVerification(recaptchaToken: string, remoteIp?: string): Promise<string> {
  const secretKey = RECAPTCHA_SERVER_SECRET;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}` + (remoteIp ? `&remoteip=${remoteIp}` : '');

  return fetch(verificationURL, { method: 'POST' })
    .then((rawResponse) => rawResponse.json())
    .catch((error) => {
      console.error("recaptchar verification error", error);
      return { success: false };
    })
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

      return testVerification(req.body['g-recaptcha-response'], req.ip)
        .then((isHuman) => {
          if (isHuman) {
            return sendMail(req.body['name'], req.body['email'], MAIL_USER, req.body['messageBody'])
              .then((info) => { return res.status(200).send({ success: true, message: "OK" }); })
              .catch((error) => { console.error("mail error", error); return res.status(404).send({ success: false, message: "mail error" }); });
          }
          else {
            return res.status(401).send({ success: false, message: "captcha verification failed" })
          }
        });

    default:
      return res.status(404).send({ success: false, message: "not found" })
  }
}