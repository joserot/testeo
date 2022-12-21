import { urlWeb } from "../../helpers/variables";
import { useEffect } from "react";
import Container from "../../components/common/Container";

const receta = ({ receta }) => {
	useEffect(() => {
		if (receta) {
			const dataString = receta.toString();
			const dataWithClass = dataString.replaceAll("className", "class");
			console.log(dataWithClass);
			document.querySelector(".receta-prueba").innerHTML = dataWithClass;
		}
	});

	return (
		<Container>
			<section className="receta-prueba"></section>
		</Container>
	);
};

receta.getInitialProps = async (ctx) => {
	const res = await fetch(urlWeb + "/" + ctx.query.receta + ".html");
	const data = await res.text();
	return { receta: data };
};

export default receta;
