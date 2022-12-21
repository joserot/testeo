import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdDinnerDining } from "react-icons/md";
import { MdRamenDining } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { removeAccents } from "../../helpers/removeAccents";

const CardsHome = ({ recetas }) => {
	const cardsPerPage = 8;
	const [recetasCards, setRecetasCards] = useState([]);
	const [starIndex, setStarIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(cardsPerPage);

	useEffect(() => {
		setRecetasCards(
			recetas.sort((a, b) => {
				return convertDate(b.date) - convertDate(a.date);
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

	const loadMore = (e) => {
		setEndIndex(endIndex + 4);
		if (endIndex >= recetasCards.length) {
			e.target.style.display = "none";
		}
	};

	return (
		<section className="cards-home">
			<h6>ULTIMAS RECETAS AÑADIDAS</h6>
			<h2>Recetas recomendadas para ti</h2>
			<h5>Por que no probar estas nuevas recetas?</h5>

			{/* CARDS */}

			<div className="cards-home-container">
				{recetasCards
					? recetasCards.slice(starIndex, endIndex).map((receta) => {
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
					: null}
			</div>
			<button onClick={loadMore} className="load-more-btn">
				Cargar más
			</button>
		</section>
	);
};

export default CardsHome;
