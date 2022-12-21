import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HiOutlineClock } from "react-icons/hi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { removeAccents } from "../../helpers/removeAccents";

const HighlightedHome = ({ recetas }) => {
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		const categoriasArr = [];

		recetas.forEach((receta) => {
			if (!categoriasArr.includes(receta.categoria)) {
				categoriasArr.push(receta.categoria);
			}
		});

		setCategorias(categoriasArr);
	}, [recetas]);

	const mainOptions = {
		type: "loop",
		perPage: 4,
		breakpoints: {
			1000: {
				perPage: 3,
				pagination: true,
			},
			600: {
				perPage: 2,
				pagination: true,
			},
			400: {
				perPage: 1,
				pagination: true,
			},
		},
		gap: 10,
		pagination: false,
	};

	return (
		<section className="highlighted-home">
			<h2>Nuestras Categorías</h2>

			<div className="highlighted-slider">
				<Splide options={mainOptions}>
					{categorias
						? categorias.map((categoria) => {
								return (
									<SplideSlide>
										<Link href={"/categorias/" + removeAccents(categoria)}>
											<a>
												<section>
													<img src="/img/slider-1.jpg" alt="Image 1" />
													<div className="title-card-slider">
														<h3>{categoria}</h3>
													</div>
												</section>
											</a>
										</Link>
									</SplideSlide>
								);
						  })
						: null}
				</Splide>
			</div>
		</section>
	);
};

export default HighlightedHome;
