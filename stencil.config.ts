import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import purgecss from "@fullhuman/postcss-purgecss";
import cssnano from "cssnano";

const purge = purgecss({
  content: ["./src/**/*.tsx", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  enableCache: false,
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purge, cssnano]
          : [])
      ]
    })
  ]
};
