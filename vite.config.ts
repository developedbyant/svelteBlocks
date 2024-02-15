import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteMdToSvelte from "./src/kitDocs/lib/plugin"

export default defineConfig({
	plugins: [viteMdToSvelte("src/routes/(docs)/docs",{
		appName:"SvelteBlocks",domainUrl:"https://svelteblocks.dev/",
		defaultImage:"https://svelteblocks.dev/images/backdrop.png", devMode:true
	}),sveltekit()]
});