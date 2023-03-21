import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Operate from "./pages/Operate";
import AutoSelector from "./pages/AutoSelector";
import Arm from "./pages/Arm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Operate />,
			},
			{
				path: "/auto",
				element: <AutoSelector />,
			},
			{
				path: "/arm",
				element: <Arm />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
