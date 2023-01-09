import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const SendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message } = req.body;

  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      secure: false,
      requireTLS: true,
      port: 587,
      auth: {
        user: process.env.SECRET_USER,
        pass: process.env.SECRET_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    let info = await transporter.sendMail({
      from: '"Portfolio Mail"',
      to: process.env.SECRET_EMAILTO,
      subject: 'Client Message From Portfolio',
      html: `<h4>Hello ${name}</h4>
        email: ${email}
        <p>Message: ${message}</p>`,
    });

    res.status(200).json({
      msg: 'Thank you for messaging I will reply as soon as possible.',
    });
  } catch (error) {
    res.status(400).json({
      errormsg: 'Something went wrong please try again later',
    });
  }
};
export default SendEmail;
