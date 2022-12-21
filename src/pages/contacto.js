import Container from "../components/common/Container";
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { useState } from "react";
import { urlWeb } from "../helpers/variables";

const contactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Sending");

		let data = {
			name,
			subject,
			email,
			message,
		};

		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log("Response received");
			if (res.status === 200) {
				console.log("Response succeeded!");
				setSubmitted(true);
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
			}
		});
	};

	return (
		<Container>
			<main className="contact-page">
				<section className="contact-hero">
					<h1>Contáctenos</h1>
					<nav>
						<a>Home</a>
						<a>Contáctenos</a>
					</nav>
				</section>
				<section className="contact-container">
					<div className="contact-data">
						<h2>Mantengámonos en contacto</h2>
						<p>
							{" "}
							Envíenos un mensaje y uno de nuestro personal de soporte
							certificado se comunicará con usted para ayudarlo con cualquier
							asistencia que pueda necesitar.
						</p>

						<div className="data">
							<img src="/img/email-contact.png" />
							<span>Correo electrónico</span>
							<span>hola@{urlWeb.replace("https://", "")} </span>
						</div>
					</div>
					<div className="contact-form">
						<form>
							<div className="double-input">
								<input
									onChange={(e) => {
										setName(e.target.value);
									}}
									name="name"
									type="text"
									placeholder="Nombre"
								/>
								<input
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									name="email"
									type="text"
									placeholder="Email"
								/>
							</div>
							<input
								onChange={(e) => {
									setSubject(e.target.value);
								}}
								name="subject"
								type="text"
								placeholder="Asunto"
							/>
							<textarea
								onChange={(e) => {
									setMessage(e.target.value);
								}}
								name="message"
								placeholder="Mensaje"
							></textarea>
							<button
								onClick={(e) => {
									handleSubmit(e);
								}}
							>
								Enviar
							</button>
						</form>
					</div>
				</section>
			</main>
		</Container>
	);
};

export default contactUs;
