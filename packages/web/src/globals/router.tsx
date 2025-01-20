import { memo } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router";
import { AppStoreProvider } from "../store/app-store.provider.tsx";
import { authRoute, rootRoute } from "./route.ts";

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
						to={`/${rootRoute.dashboard}`}
						replace={true}
					/>
				),
			},
			{
				path: `/${rootRoute.dashboard}`,
				lazy: () =>
					import("../pages/dashboard.page.tsx").then((m) => ({
						// biome-ignore lint/style/useNamingConvention: 3-rd party type
						Component: m.DashboardPage,
					})),
			},
			{
				path: `/${rootRoute.auth}`,
				lazy: () =>
					import("../pages/auth.page.tsx").then((m) => ({
						// biome-ignore lint/style/useNamingConvention: 3-rd party type
						Component: m.AuthPage,
					})),
				children: [
					{
						path: `/${rootRoute.auth}`,
						element: (
							<Navigate
								to={`/${rootRoute.auth}/${authRoute.login}`}
								replace={true}
							/>
						),
					},
					{
						path: `/${rootRoute.auth}/${authRoute.login}`,
						lazy: () =>
							import("../components/login.tsx").then((m) => ({
								// biome-ignore lint/style/useNamingConvention: 3-rd party type
								Component: m.Login,
							})),
					},
					{
						path: `/${rootRoute.auth}/${authRoute.register}`,
						lazy: () =>
							import("../components/register.tsx").then((m) => ({
								// biome-ignore lint/style/useNamingConvention: 3-rd party type
								Component: m.Register,
							})),
					},
				],
			},
		],
	},
]);
