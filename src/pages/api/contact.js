export default function (req, res) {
	require("dotenv").config();

	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		host: "mail.cocinemos.online",
		port: 465,
		auth: {
			user: "hola@cocinemos.online",
			pass: "X4$+KVHd?+1e",
		},
		secure: true,
	});

	const mailData = {
		from: '"cocinemos.online" <hola@cocinemos.online>',
		to: "hola@cocinemos.online",
		subject: `Message From ${req.body.name}`,
		text: req.body.message + " | Sent from: " + req.body.email,
		html: `<div>${req.body.message}</div><p>Email: ${req.body.email}</p>`,
	};

	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	console.log(req.body);
	res.send("success");
}
