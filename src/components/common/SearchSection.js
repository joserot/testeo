import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const SearchSection = ({ isOpen, closeModal }) => {
	const router = useRouter();

	const searchQuery = (e) => {
		e.preventDefault();
		router.push({
			pathname: "/resultados-busqueda",
			query: { busqueda: e.target.search.value.toLowerCase() },
		});
	};

	return (
		<section className={`search-section ${isOpen && "is-open"}`}>
			<button onClick={closeModal}>
				<AiOutlineClose />
			</button>
			<form onSubmit={searchQuery}>
				<input name="search" type="search" placeholder="Search..." />
				<CiSearch />
			</form>
			<p>Type above and press Enter to search. Press Close to cancel.</p>
		</section>
	);
};

export default SearchSection;
