import { urlWeb } from "../../helpers/variables";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { removeAccents } from "../../helpers/removeAccents";

const Footer = () => {
	const [categorias, setCategorias] = useState([]);
	const [recetas, setRecetas] = useState([]);
	const [recetasRandom, setRecetasRandom] = useState([]);

	useEffect(() => {
		(async function () {
			const res = await fetch(urlWeb + "/datos.json", {
				referrerPolicy: "unsafe_url",
			});
			const data = await res.json();
			setRecetas(
				data.recetas.sort((a, b) => {
					return convertDate(b.date) - convertDate(a.date);
				}),
			);
		})();
	}, []);

	useEffect(() => {
		const categoriasArr = [];
		recetas.forEach((receta) => {
			categoriasArr.push(receta.categoria.toLowerCase());
		});
		const myUniqueArray = [...new Set(categoriasArr)];
		setCategorias(myUniqueArray);
	}, [recetas]);

	useEffect(() => {
		const newRecetas = [].concat(recetas);

		setRecetasRandom(
			newRecetas.sort(() => {
				return Math.random() - 0.5;
			}),
		);
	}, [recetas]);

	const convertDate = (str) => {
		let year = parseInt(str.slice(6, 10));
		let month = parseInt(str.slice(3, 5));
		let date = parseInt(str.slice(0, 2));
		let hours = parseInt(str.slice(11, 13));
		let minutes = parseInt(str.slice(14, 16));
		return new Date(year, month, date, hours, minutes);
	};

	return (
		<footer>
			<div className="footer-content">
				<article className="footer-section">
					<img
						className="footer-logo"
						src="/img/logo-cocinemos-3.png"
						alt="logo"
					/>
					<p>Las mejores recetas de cocina que vas a encontrar en internet.</p>
					<Link href="/contacto">
						<button>Contactanos </button>
					</Link>
				</article>

				<article className="footer-section">
					<h3>RECETAS RECIENTES</h3>

					{recetas.length
						? recetas.slice(0, 3).map((receta) => {
								return (
									<Link
										href={
											"/recetas/" +
											removeAccents(receta.nombreReceta)
												.replaceAll(" ", "-")
												.replaceAll(".", "")
										}
									>
										<div className="footer-section-card">
											<img src="/img/slider-1.jpg" />
											<div>
												<h5>{receta.nombreReceta}</h5>
												<span>10 ingredients - 60 minutes</span>
											</div>
										</div>
									</Link>
								);
						  })
						: null}
				</article>

				<article className="footer-section">
					<h3>MÁS POPULARES</h3>

					{recetasRandom.length
						? recetasRandom.slice(0, 3).map((receta) => {
								return (
									<Link
										href={
											"/recetas/" +
											removeAccents(receta.nombreReceta)
												.replaceAll(" ", "-")
												.replaceAll(".", "")
										}
									>
										<div className="footer-section-card">
											<img src="/img/slider-1.jpg" />
											<div>
												<h5>{receta.nombreReceta}</h5>
												<span>10 ingredients - 60 minutes</span>
											</div>
										</div>
									</Link>
								);
						  })
						: null}
				</article>

				<article className="footer-section">
					<h3>CATEGORÍAS</h3>
					<div className="footer-section-links">
						{categorias
							? categorias.map((categoria) => {
									return (
										<Link href={"/categorias/" + removeAccents(categoria)}>
											<a>{categoria} </a>
										</Link>
									);
							  })
							: null}
					</div>
				</article>
			</div>
			<div className="footer-bottom">
				<p>
					© 2022 {urlWeb.replace("https://", "")} Todos los derechos reservados{" "}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
