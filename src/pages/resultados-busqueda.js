import Container from "../components/common/Container";
import { useRouter } from "next/router";
import { urlWeb } from "../helpers/variables";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { removeAccents } from "../helpers/removeAccents";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdDinnerDining } from "react-icons/md";
import { MdRamenDining } from "react-icons/md";
import RecetasContext from "../context/recetasContext";

const searchResults = ({ recetas }) => {
	const router = useRouter();
	const { busqueda } = router.query;
	const [recetasCards, setRecetasCards] = useState([]);
	//context
	const { setRecetas } = useContext(RecetasContext);

	setRecetas(recetas);

	useEffect(() => {
		const filterRecetas = recetas.filter((receta) => {
			return receta.nombreReceta.toLowerCase().includes(busqueda);
		});

		setRecetasCards(filterRecetas);
	}, [recetas]);

	useEffect(() => {}, []);

	const chageQuery = (e) => {
		e.preventDefault();
		router.query.busqueda = e.target.search.value.toLowerCase();
		router.push(router);
	};

	return (
		<Container>
			<main className="search-results-page">
				<div className="search-results-header-links">
					<a>Home</a>
					<a>Busqueda</a>
				</div>
				<h1>
					<span>{busqueda}</span> - Resultados de Busqueda
				</h1>

				<form onSubmit={chageQuery}>
					<input name="search" type="text" placeholder="Search..." />
					<button>BUSCAR</button>
				</form>
				<p className="p-results">
					Si no estás satisfecho con los resultados, realiza otra busqueda
				</p>
				<section className="search-results-container">
					{recetasCards.length > 0 ? (
						recetasCards.map((receta) => {
							return (
								<Link
									href={
										"/recetas/" +
										removeAccents(receta.nombreReceta)
											.replaceAll(" ", "-")
											.replaceAll(".", "")
									}
								>
									<article>
										<div className="card-play">
											<AiOutlinePlayCircle />{" "}
										</div>
										<img src="/img/slider-1.jpg" />
										<a className="card-category">{receta.categoria}</a>
										<div className="card-cook">
											<div>
												<MdDinnerDining /> 10 Ingredientes{" "}
											</div>
											<div>
												<MdRamenDining /> 60 Minutos{" "}
											</div>
										</div>
										<a className="card-title">{receta.nombreReceta}</a>
									</article>
								</Link>
							);
						})
					) : (
						<span>No hay resultados para "{busqueda}" </span>
					)}
				</section>
			</main>
		</Container>
	);
};

searchResults.getInitialProps = async (ctx) => {
	const res = await fetch(urlWeb + "/datos.json");
	const data = await res.json();
	return { recetas: data.recetas };
};

export default searchResults;
