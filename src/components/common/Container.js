import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Container = ({ children }) => {
	return (
		<div className="container">
			<Head>
				<title>Template</title>
				{/* <link rel="stylesheet" href="https://cocinemos.online/styles.css" /> */}
				{/* GOOGLE FONTS */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap"
					rel="stylesheet"
				></link>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				></meta>
			</Head>
			<Header />
			<div className="container">{children}</div>
			<Footer />
		</div>
	);
};

export default Container;
