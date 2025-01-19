import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	server: {
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
	plugins: [react(), svgr()],
});
