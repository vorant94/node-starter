import { Card } from "@mantine/core";
import { memo } from "react";
import {
	DefaultLayout,
	DefaultLayoutHeader,
} from "../layouts/default.layout.tsx";
import { cn } from "../utils/cn.ts";

export const DashboardPage = memo(() => {
	return (
		<DefaultLayout header={<DefaultLayoutHeader />}>
			<div className={cn("grid flex-1 grid-cols-2 gap-2")}>
				<Card className={cn("flex items-center justify-center")}>Card 1</Card>
				<Card className={cn("flex items-center justify-center")}>Card 2</Card>
				<Card className={cn("flex items-center justify-center")}>Card 3</Card>
				<Card className={cn("flex items-center justify-center")}>Card 4</Card>
			</div>
		</DefaultLayout>
	);
});
