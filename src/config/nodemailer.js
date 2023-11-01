import nodeMailer from 'nodemailer';

export const transporter = nodeMailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.SENDER_EMAIL,
		pass: process.env.EMAIL_PASS
	}
})

export const mailOptions = {
	from: process.env.SENDER_EMAIL,
	to: process.env.RECIEVER_EMAIL,
}