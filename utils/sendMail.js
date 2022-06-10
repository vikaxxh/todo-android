import {createTransport} from "nodemailer"

export const sendMail = async (email, subject, message) => {
  var transport = createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: email,
    subject: subject,
    text: message,
  };

  await transport.sendMail(mailOptions);
};
