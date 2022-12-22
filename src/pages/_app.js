import "../../public/styles/styles.css";
import "../../public/styles/custom.css";
import "@splidejs/react-splide/css";
import { RecetasProvider } from "../context/recetasContext";

function MyApp({ Component, pageProps }) {
	return (
		<RecetasProvider>
			<Component {...pageProps} />
		</RecetasProvider>
	);
}

export default MyApp;
