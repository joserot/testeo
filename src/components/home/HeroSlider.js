import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MdDinnerDining } from "react-icons/md";
import { MdRamenDining } from "react-icons/md";
import { MdWbTwilight } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { removeAccents } from "../../helpers/removeAccents";

const HeroSlider = ({ recetas }) => {
	const [recetasSlider, setRecetasSlider] = useState([]);

	useEffect(() => {
		setRecetasSlider(recetas);
	}, [recetas]);

	const mainOptions = {
		type: "loop",
		perPage: 2,
		breakpoints: {
			900: {
				perPage: 1,
				pagination: true,
			},
		},
		gap: 10,
		pagination: false,
		arrows: false,
		focus: "center",
		preloadPages: 1,
		lazyLoad: "nearby",
		autoplay: true,
		interval: 2000,
	};

	return (
		<section className="hero-slider">
			<Splide options={mainOptions}>
				{recetasSlider
					? recetasSlider.map((receta) => {
							return (
								<SplideSlide>
									<Link
										href={
											"/recetas/" +
											removeAccents(receta.nombreReceta)
												.replaceAll(" ", "-")
												.replaceAll(".", "")
										}
									>
										<section className="hero-slide-section">
											<img src="/img/slider-1.jpg" alt="Image 1" />
											<span className="slider-category">
												{receta.categoria}
											</span>
											<h3>{receta.nombreReceta}</h3>
											<div className="slider-cook">
												<div>
													<MdDinnerDining />
													<span>Ingredientes</span>
													<span>10</span>
												</div>

												<div>
													<MdRamenDining />
													<span>Cocinando</span>
													<span>20 minutos</span>
												</div>

												<div>
													<MdWbTwilight />
													<span>Para</span>
													<span>4 Personas</span>
												</div>
											</div>
										</section>
									</Link>
								</SplideSlide>
							);
					  })
					: null}
			</Splide>
		</section>
	);
};

export default HeroSlider;
