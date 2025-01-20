import { IconChartBar } from "@tabler/icons-react";
import type { ReactNode } from "react";
import { Icon } from "../components/icon.tsx";
import { rootRoute } from "./route.ts";

export const topNavLinks: Array<NavLink> = [
	{
		label: "dashboard",
		path: `/${rootRoute.dashboard}`,
		icon: <Icon icon={IconChartBar} />,
	},
];

export const bottomNavLinks: Array<NavLink> = [];

export interface NavLink {
	label: string;
	path: string;
	icon: ReactNode;
}
