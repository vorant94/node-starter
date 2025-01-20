import { memo } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router";
import { AppStoreProvider } from "../store/app-store.provider.tsx";
import { route } from "./route.ts";

const Root = memo(() => {
	return (
		<AppStoreProvider>
			<Outlet />
		</AppStoreProvider>
	);
});

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: (
					<Navigate
						to={`/${route.dashboard}`}
						replace={true}
					/>
				),
			},
			{
				path: `/${route.dashboard}`,
				lazy: () =>
					import("../pages/dashboard.page.tsx").then((m) => ({
						// biome-ignore lint/style/useNamingConvention: 3-rd party type
						Component: m.DashboardPage,
					})),
			},
		],
	},
]);
