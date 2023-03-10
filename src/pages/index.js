import Container from "../components/common/Container";
import HeroSlider from "../components/home/HeroSlider";
import CardsHome from "../components/home/CardsHome";
import HighlightedHome from "../components/home/HighlightedHome";
import { urlWeb } from "../helpers/variables";
import RecetasContext from "../context/recetasContext";
import { useContext } from "react";

const index = ({ recetas }) => {
	//context
	const { setRecetas } = useContext(RecetasContext);

	setRecetas(recetas);

	return (
		<Container>
			<HeroSlider recetas={recetas} />
			<CardsHome recetas={recetas} />
			<HighlightedHome recetas={recetas} />
		</Container>
	);
};

index.getInitialProps = async (ctx) => {
	const res = await fetch(urlWeb + "/datos.json");
	const data = await res.json();
	return { recetas: data.recetas };
};

export default index;
