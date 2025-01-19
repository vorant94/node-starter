import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import type { Config } from "postcss-load-config";
import postcssNested from "postcss-nested";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";

export default {
	plugins: [
		tailwindcss(),
		autoprefixer(),
		cssnano(),
		tailwindcssNesting(postcssNested),
	],
} satisfies Config;
