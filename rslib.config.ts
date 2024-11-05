import { defineConfig } from "@rslib/core";
import { pluginSolid } from "@rsbuild/plugin-solid";
import { pluginBabel } from "@rsbuild/plugin-babel";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "esnext",
      dts: {
        build: true,
        distPath: "./dist",
      },
      source: {
        tsconfigPath: "./tsconfig.lib.json",
        entry:{
          index:'./src/lib/'
        }
      },
      output: {
        target: "web", // DO NOT USE `NODE` AS TARGET, see https://github.com/solidjs/solid/issues/1984
      },
      plugins: [
        pluginBabel({
          include: /\.(?:jsx|tsx)$/,
        }),
        pluginSolid(),
      ],
      
    },
  ],
});
