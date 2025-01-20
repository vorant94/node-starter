export const breakpoint = {
	sm: "sm",
	md: "md",
	lg: "lg",
	xl: "xl",
	"2xl": "2xl",
} as const;
export type Breakpoint = keyof typeof breakpoint;

export const breakpointToMediaQuery = {
	sm: "(min-width: 640px)",
	md: "(min-width: 768px)",
	lg: "(min-width: 1024px)",
	xl: "(min-width: 1280px)",
	"2xl": "(min-width: 1536px)",
} as const satisfies Record<Breakpoint, string>;
