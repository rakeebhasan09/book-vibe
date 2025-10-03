import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MianLayout from "./MianLayout/MianLayout";
import HomePage from "./components/HomePage/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MianLayout,
		children: [
			{
				path: "/",
				Component: HomePage,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
