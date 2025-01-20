import { usePrevious } from "@mantine/hooks";
import { type PropsWithChildren, memo, useEffect } from "react";
import { useLocation } from "react-router";
import { useLayoutSlice } from "../selectors/use-layout-slice.ts";

export const LayoutSliceConsumer = memo(({ children }: PropsWithChildren) => {
	const { pathname } = useLocation();
	const prevPathname = usePrevious(pathname);

	const { navDisclosure } = useLayoutSlice();

	useEffect(() => {
		if (pathname !== prevPathname) {
			navDisclosure.close();
		}
	}, [navDisclosure, pathname, prevPathname]);

	return <>{children}</>;
});
