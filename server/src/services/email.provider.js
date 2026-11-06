
import { Resend } from 'resend';
import "dotenv/config"
const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;


export const sentEmailByResender = async (email) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Hello Resend",
      text: "It's working!",
    });

    if (error) {
      console.log("This is senderss error", error);
      return;
    }

    // console.log("Email sent successfully!", data);

  } catch (error) {
    console.log("Senderss error" +error);
  }
};

