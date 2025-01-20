import { useMediaQuery } from "@mantine/hooks";
import { memo } from "react";
import { breakpointToMediaQuery } from "../globals/breakpoint.ts";
import { cn } from "../utils/cn.ts";

export const Logo = memo(() => {
	const isMd = useMediaQuery(breakpointToMediaQuery.md);

	return <h1 className={cn("w-[192px]")}>{isMd ? "Node Starter" : "NS"}</h1>;
});
