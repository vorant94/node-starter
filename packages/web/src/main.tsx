import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home.tsx";

if (import.meta.env.DEV) {
	window.addEventListener("unhandledrejection", ({ reason }) => {
		if (reason instanceof Error) {
			console.error(reason.message);
		}
	});

	window.addEventListener("error", ({ error }) => {
		if (error instanceof Error) {
			console.error(error.message);
		}
	});
}

const root = document.getElementById("root");
if (!root) {
	throw new Error("root should be defined!");
}

createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				{/* TODO add lazy-loading here */}
				<Route
					index
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
