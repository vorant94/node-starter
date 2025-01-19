import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router/dom";
import { queryClient } from "./globals/query-client.ts";
import { router } from "./globals/router.tsx";

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
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
);
