import { defineConfig } from "vite";

export default defineConfig({
	root: "./public",
	server: {
		port: 3000,
	},
	build: {
		outDir: "../dist",
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
