import { createContext, useState, useEffect } from "react";

const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
	const [recetas, setRecetas] = useState(null);

	const data = { recetas, setRecetas };

	return (
		<RecetasContext.Provider value={data}>{children}</RecetasContext.Provider>
	);
};

export { RecetasProvider };
export default RecetasContext;
