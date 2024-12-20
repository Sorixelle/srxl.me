import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://srxl.me",
  output: "server",
  integrations: [
    tailwind(),
    icon({
      include: {
        ion: ["key-sharp", "mail-sharp"],
        mdi: ["arrow-left", "arrow-right"],
        ph: ["fediverse-logo"],
        "simple-icons": ["github", "matrix"],
      },
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
