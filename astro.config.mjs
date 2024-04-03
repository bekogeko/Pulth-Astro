import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://blog.pulth.com",
    integrations: [tailwind(), sitemap(), react()]
});