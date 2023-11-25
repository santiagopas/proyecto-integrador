import HomePage from "../pages/HomePage";
import AddProduct from "../pages/AddProduct";
import ProductPage from "../pages/ProductPage";

const routes = [
	{
		path: "/",
		name: "Home",
		element: HomePage,
	},
	{
		path: "/productos",
		name: "Productos",
		element: ProductPage,
	},
	{
		path: "/productos/crear",
		name: "Nuevo producto",
		element: AddProduct
	},
];

export default routes;
