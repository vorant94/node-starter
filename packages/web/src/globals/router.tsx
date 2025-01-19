import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		// biome-ignore lint/style/useNamingConvention: 3-rd party type
		lazy: () => import("../pages/home").then((m) => ({ Component: m.Home })),
	},
]);
