import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    base: "tag-creator"
    integrations: [tailwind()],
    server: {
        port: 3000,
    },
    site: "https://cyrus01337.github.io",
});
