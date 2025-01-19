import { memo } from "react";
import { cn } from "../utils/cn.ts";

export const Home = memo(() => {
	return <div className={cn("bg-amber-300")}>hello world!</div>;
});
