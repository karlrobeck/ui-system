import { defineConfig } from "@rsbuild/core";
import { pluginSolid } from "@rsbuild/plugin-solid";
import { pluginBabel } from "@rsbuild/plugin-babel";

export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginSolid(),
  ],
  html: {
    template: "./index.html",
  },
  output:{
    distPath: {
        root:'./dist-site',
    },
    filename:{
        html:'404.html'
    },
    assetPrefix:'/ui-system/'
  },
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
});
