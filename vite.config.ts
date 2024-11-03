import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { extname, relative, resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer"
import { glob } from 'glob'
import { fileURLToPath } from 'node:url';


export default defineConfig({
  plugins: [solid(),dts({ tsconfigPath:resolve(__dirname, "tsconfig.lib.json") })],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    copyPublicDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),      
      formats: ["es"],
    },
    rollupOptions:{
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('lib/**/*.{ts,tsx}', {
          ignore: ["lib/**/*.d.ts"],
        }).map(file => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      )
    ,
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },
});
