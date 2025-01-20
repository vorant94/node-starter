import {
	Affix,
	AppShell,
	Burger,
	NavLink as MantineNavLink,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { type PropsWithChildren, type ReactElement, memo } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "../components/logo.tsx";
import { breakpoint, breakpointToMediaQuery } from "../globals/breakpoint.ts";
import {
	type NavLink,
	bottomNavLinks,
	topNavLinks,
} from "../globals/nav-links.tsx";
import { useLayoutSlice } from "../store/selectors/use-layout-slice.ts";
import { cn } from "../utils/cn.ts";

export const DefaultLayout = memo(
	({ header, children }: PropsWithChildren<DefaultLayoutProps>) => {
		const { isNavOpen, navDisclosure } = useLayoutSlice();

		return (
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 200,
					breakpoint: breakpoint.sm,
					collapsed: { mobile: !isNavOpen },
				}}
				padding="xl"
			>
				<AppShell.Header className={cn("flex items-center gap-2 px-4")}>
					<Burger
						opened={isNavOpen}
						onClick={navDisclosure.toggle}
						hiddenFrom={breakpoint.sm}
						size="sm"
					/>
					{header}
				</AppShell.Header>

				<AppShell.Navbar p="md">
					<ol className={cn("flex flex-1 flex-col")}>
						{topNavLinks.map((navLink) => (
							<DefaultLayoutNavLink
								key={navLink.path}
								{...navLink}
							/>
						))}

						<div className="flex-1" />

						{bottomNavLinks.map((navLink) => (
							<DefaultLayoutNavLink
								key={navLink.path}
								{...navLink}
							/>
						))}
					</ol>
				</AppShell.Navbar>

				<AppShell.Main className={cn("flex flex-col bg-gray-100")}>
					{children}
				</AppShell.Main>
			</AppShell>
		);
	},
);

export interface DefaultLayoutProps {
	header: ReactElement<ReturnType<typeof DefaultLayoutHeader>>;
}

export const DefaultLayoutHeader = memo(
	({ actions, children }: PropsWithChildren<DefaultLayoutHeaderProps>) => {
		const isMd = useMediaQuery(breakpointToMediaQuery.md);
		const { isNavOpen } = useLayoutSlice();

		return (
			<>
				<Logo />
				{children ? <div>{children}</div> : null}
				<div className={cn("flex-1")} />
				{actions ? (
					isMd ? (
						<div>{actions}</div>
					) : isNavOpen ? null : (
						<Affix position={{ bottom: 20, right: 20 }}>
							<div>{actions}</div>
						</Affix>
					)
				) : null}
			</>
		);
	},
);

export interface DefaultLayoutHeaderProps {
	actions?: ReactElement;
}

const DefaultLayoutNavLink = memo(
	({ path, label, icon }: DefaultLayoutNavLinkProps) => {
		const { pathname } = useLocation();

		return (
			<li>
				<MantineNavLink
					component={Link}
					to={path}
					label={label}
					leftSection={icon}
					active={pathname.startsWith(path)}
				/>
			</li>
		);
	},
);

interface DefaultLayoutNavLinkProps extends NavLink {}
