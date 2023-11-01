import { transporter, mailOptions } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.subject ||
      !data.message
    ) {
      return res.status(400).json({ success: false, message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Message from Portfolio",
        text: Object.entries(data).reduce((str, [key, value]) => {
          str += `${key}: \n${value} \n\n`;
          return str;
        }, ""),
        html: Object.entries(data).reduce((str, [key, value]) => {
          str += `<h3 align="left">${key}:</h3> \n<p align="left">${value}</p> \n\n`;
          return str;
        }, ""),
      });
      return res.status(200).json({ success: true, message: "Email Sent" });
    } catch (err) {
      console.log("err", err);
      return res.status(502).json({ success: false, message: err?.message });
    }
  }
};

export default handler;
