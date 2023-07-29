import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://srxl.me",
  integrations: [
    tailwind(),
    icon({
      include: {
        ion: ["key-sharp", "mail-sharp"],
        "simple-icons": ["github", "matrix"],
      },
    }),
  ],
});
