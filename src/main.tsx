import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import "./libs/reset.scss";
import "./libs/vars.scss";
import { Category, Home } from "./pages/index.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <span style={{ color: "black" }}>Error</span>,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/category",
				element: <Category />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
