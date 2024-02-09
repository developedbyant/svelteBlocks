import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import kitDocsPlugin from "./src/kitDocs/lib/plugin";

export default defineConfig({
	plugins: [kitDocsPlugin(),sveltekit()]
});
