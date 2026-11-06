import nodemailer from "nodemailer";
import "dotenv/config";

const sendEmail = async(email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
    const message = {
    from: process.env.USER_EMAIL,
    to: email,
    subject: "Hello World",
    text: "This is the plaintext version of the email.",
    html: "<p>This is the <strong>HTML version</strong> of the email.</p>",
  };
  try {
  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
  throw err;
}

};
export default sendEmail;
