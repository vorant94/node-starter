import { Card } from "@mantine/core";
import { memo } from "react";
import { Outlet } from "react-router";
import { CenteredLayout } from "../layouts/centered.layout.tsx";

export const AuthPage = memo(() => {
	return (
		<CenteredLayout>
			<Card
				shadow="sm"
				padding="md"
			>
				<Outlet />
			</Card>
		</CenteredLayout>
	);
});
