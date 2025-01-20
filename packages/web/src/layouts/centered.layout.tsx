import { type PropsWithChildren, memo } from "react";
import { cn } from "../utils/cn.ts";

export const CenteredLayout = memo(({ children }: PropsWithChildren) => {
	return (
		<main className={cn("flex flex-1 flex-col items-center justify-center")}>
			{children}
		</main>
	);
});
