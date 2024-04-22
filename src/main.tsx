import React from "react";
import ReactDOM from "react-dom/client";
import "reflect-metadata";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import "./libs/reset.scss";
import "./libs/vars.scss";
import { Category, Dogs, Home } from "./pages/index.ts";

const PATH = {
	HOME: "/home",
	CATEGORY: "/category",
	DOG: "/dogs",
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
				element: <Dogs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
