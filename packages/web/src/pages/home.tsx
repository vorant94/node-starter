import { useQuery } from "@tanstack/react-query";
import { helloWorld } from "api";
import { memo } from "react";
import { cn } from "../utils/cn.ts";

export const Home = memo(() => {
	const { isPending, error, data } = useQuery({
		queryKey: ["hello world"],
		queryFn: async () => {
			const res = await fetch("/api");
			return await res.json();
		},
	});

	helloWorld();

	return (
		<div className={cn("bg-amber-300")}>
			{isPending ? "pending" : error ? "error" : JSON.stringify(data)}
		</div>
	);
});
