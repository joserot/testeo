import Container from "../../components/common/Container";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdDinnerDining } from "react-icons/md";
import { MdRamenDining } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import { urlWeb } from "../../helpers/variables";
import { useRouter } from "next/router";
import Link from "next/link";
import { removeAccents } from "../../helpers/removeAccents";

const easyAndFast = ({ recetas, categoria }) => {
	const cardsPerPage = 12;
	const [cards, setCards] = useState([]);
	const [filterCards, setFilterCards] = useState([]);
	const [activePage, setActivePage] = useState(1);
	const [starIndex, setStarIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(cardsPerPage);
	const [query, setQuery] = useState("");
	const count = filterCards.length;
	const totalPages = Math.ceil(count / cardsPerPage);

	useEffect(() => {
		setCards(recetas);
	}, [filterCards, categoria]);

	useEffect(() => {
		const filterArr = cards.filter((card) => {
			return removeAccents(card.categoria) === categoria;
		}, []);

		setFilterCards(filterArr);
	}, [cards]);

	useEffect(() => {
		const btns = document.querySelectorAll(".easy-and-fast-pagination button");
		btns.forEach((btn) => {
			if (btn.textContent == activePage) {
				btn.classList.add("active");
			} else {
				btn.classList.remove("active");
			}
		});
	}, [activePage, filterCards]);

	const paginationBts = () => {
		let btns = [];
		for (let index = 1; index <= totalPages; index++) {
			btns.push(index);
		}
		return btns;
	};

	useEffect(() => {
		const filterQuery = cards.filter((card) => {
			return (
				(!query.length && removeAccents(card.categoria) === categoria) ||
				(removeAccents(card.nombreReceta)
					.toLowerCase()
					.replaceAll("-", " ")
					.includes(query) &&
					removeAccents(card.categoria) === categoria)
			);
		});

		setFilterCards(filterQuery);
	}, [query]);

	const changePage = (e) => {
		const number = parseInt(e.target.textContent);
		setActivePage(number);
		setStarIndex(number * cardsPerPage - cardsPerPage);
		setEndIndex(number * cardsPerPage);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const changeQuery = (e) => {
		setQuery(e.target.value.toLowerCase());
	};

	return (
		<Container>
			<main className="easy-and-fast">
				<section className="easy-and-fast-header">
					<h1>
						Categoría: {categoria === "espanola" ? "española" : categoria}{" "}
					</h1>
					<input
						onChange={changeQuery}
						onKeyDown={changeQuery}
						type="text"
						placeholder="Search for recipes"
					/>
					<div className="search-icon">
						<AiOutlineSearch />
					</div>
				</section>

				<section className="easy-and-fast-cards">
					{filterCards.length > 0 ? (
						filterCards.slice(starIndex, endIndex).map((card) => {
							return (
								<Link
									href={
										"/recetas/" +
										removeAccents(card.nombreReceta)
											.replaceAll(" ", "-")
											.replaceAll(".", "")
									}
								>
									<article>
										<div className="card-play">
											<AiOutlinePlayCircle />{" "}
										</div>
										<img src="/img/slider-1.jpg" />
										<a className="card-category">{card.categoria}</a>
										<div className="card-cook">
											<div>
												<MdDinnerDining /> 10 Ingredientes{" "}
											</div>
											<div>
												<MdRamenDining /> 60 Minutos{" "}
											</div>
										</div>
										<a className="card-title">{card.nombreReceta}</a>
									</article>
								</Link>
							);
						})
					) : (
						<span>No hay resultados</span>
					)}
				</section>

				<section className="easy-and-fast-pagination">
					{totalPages > 1
						? paginationBts().map((btn) => {
								return <button onClick={changePage}>{btn}</button>;
						  })
						: null}
				</section>
			</main>
		</Container>
	);
};

easyAndFast.getInitialProps = async (ctx) => {
	const res = await fetch(urlWeb + "/datos.json");
	const data = await res.json();
	const categoria = ctx.query.categoria;
	return { recetas: data.recetas, categoria: categoria };
};

export default easyAndFast;
