import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
	ScrollRestoration,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import "./libs/reset.scss";
import "./libs/vars.scss";
import { Category, Dog, Home } from "./pages/index.ts";

const PATH = {
	HOME: "/home",
	CATEGORY: "/category",
	DOG: "/category/:dogId",
} as const;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to={PATH.HOME} />,
	},
	{
		element: <App />,
		errorElement: <span style={{ color: "black" }}>Error</span>,
		children: [
			{
				path: PATH.HOME,
				element: <Home />,
			},
			{
				path: PATH.CATEGORY,
				element: <Category />,
			},
			{
				path: PATH.DOG,
				element: <Dog />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
