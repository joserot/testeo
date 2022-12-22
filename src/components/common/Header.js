import Link from "next/link";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import SearchSection from "./SearchSection";
import useModal from "../../hooks/useModal";
import { urlWeb, nav1, nav2, nav3, nav4 } from "../../helpers/variables";
import { AiFillCaretDown } from "react-icons/ai";
import { removeAccents } from "../../helpers/removeAccents";

const Header = () => {
	const nav = useRef(null);
	const subMenu = useRef(null);
	const [isOpenSearch, openSearch, closeSearch] = useModal(false);
	const [categorias, setCategorias] = useState([]);
	const [recetas, setRecetas] = useState([]);
	const router = useRouter();

	const burgerMenu = (e) => {
		e.preventDefault();
		const menu = nav.current;

		if (menu.classList.contains("nav-header-active")) {
			menu.classList.remove("nav-header-active");
		} else {
			menu.classList.add("nav-header-active");
		}
	};

	const subMenuFunc = (e) => {
		const sub = subMenu.current;
		if (sub.classList.contains("active-sub")) {
			sub.classList.remove("active-sub");
		} else {
			sub.classList.add("active-sub");
		}
	};

	useEffect(() => {
		document.body.addEventListener("click", (e) => {
			const subMenuNav = document.querySelector(".nav-header-link-sub a");
			if (e.target === subMenuNav) return;
			const sub = subMenu.current;
			if (sub !== null) {
				sub.classList.remove("active-sub");
			}
		});
	}, []);

	useEffect(() => {
		(async function () {
			const res = await fetch(urlWeb + "/datos.json", {
				headers: {
					referrerPolicy: "unsafe_url",
				},
			});
			const data = await res.json();
			setRecetas(data.recetas);
		})();
	}, []);

	useEffect(() => {
		const categoriasArr = [];

		recetas.forEach((receta) => {
			const categoria = removeAccents(receta.categoria);
			categoriasArr.push(receta.categoria.toLowerCase());
		});

		const myUniqueArray = [...new Set(categoriasArr)];

		setCategorias(myUniqueArray);
	}, [recetas]);

	return (
		<header>
			<SearchSection isOpen={isOpenSearch} closeModal={closeSearch} />
			<div className="header-container">
				{/* LOGO */}
				<Link href="/">
					<a className="logo-header">
						<img src="/img/logo-cocinemos-2.png" alt="logo" />
					</a>
				</Link>

				{/* NAV*/}
				<button onClick={burgerMenu} className="burger-menu">
					<div></div>
					<div></div>
					<div></div>
				</button>
				<nav ref={nav} className="nav-header">
					<button onClick={burgerMenu} className="close-burger-menu">
						<AiOutlineClose />
					</button>
					<Link href="/">
						<a
							className={
								router.pathname == "/"
									? "nav-header-link active"
									: "nav-header-link"
							}
						>
							{nav1}
						</a>
					</Link>
					<Link href={"/resultados-busqueda"}>
						<a
							className={
								router.pathname == "/resultados-busqueda"
									? "nav-header-link active"
									: "nav-header-link"
							}
						>
							{nav2}
						</a>
					</Link>

					<span className="nav-header-link-sub">
						<a onClick={subMenuFunc}>
							{nav3} <AiFillCaretDown />
						</a>
						<div ref={subMenu} className="sub-menu">
							{categorias
								? categorias.map((categoria) => {
										return (
											<Link href={"/categorias/" + removeAccents(categoria)}>
												<a onClick={subMenuFunc}>{categoria} </a>
											</Link>
										);
								  })
								: null}
						</div>
					</span>

					<Link href={"/" + removeAccents(nav4)}>
						<a
							className={
								router.pathname == "/" + removeAccents(nav4)
									? "nav-header-link active"
									: "nav-header-link"
							}
						>
							{nav4}
						</a>
					</Link>

					<a onClick={openSearch} className=" nav-header-icon">
						<CiSearch />
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
