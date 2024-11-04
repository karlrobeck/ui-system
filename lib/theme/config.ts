import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { ColorConfig, Theme } from "./types";
import { PluginAPI } from "tailwindcss/types/config";
import { toKebabCase } from "../utils";

export function generateConfig(theme: Theme) {
  return plugin((c) => {
    if (theme.colors.light) {
      c.addUtilities(generateColor(c, theme.colors.light, "bg"));
      c.addUtilities(generateColor(c, theme.colors.light, "border"));
      c.addUtilities(generateColor(c, theme.colors.light, "text"));
    }
    if (theme.colors.dark) {
      c.addUtilities(generateColor(c, theme.colors.dark, "bg", "dark"));
      c.addUtilities(generateColor(c, theme.colors.dark, "border", "dark"));
      c.addUtilities(generateColor(c, theme.colors.dark, "text", "dark"));
    }

    return c;
  });
}

export function generateColor(
  c: PluginAPI,
  colors: ColorConfig,
  type: "border" | "bg" | "text",
  mode: "light" | "dark" = "light"
) {
  let obj: {
    [key: string]:
      | { "background-color": string }
      | { color: string }
      | { "border-color": string };
  } = {};

  for (const [key, value] of Object.entries(colors)) {
    const prefix = mode === "dark" ? ".dark-" : ".";
    const kebabKey = toKebabCase(key);
    const baseKey = `${prefix}${type}-${kebabKey}`;
    const colorProperty = type === "border" ? "border-color" : type === "text" ? "color" : "background-color";

    obj[baseKey] = {
      [colorProperty]: value,
    } as { "background-color": string } | { color: string } | { "border-color": string };

    if (value.includes("<alpha-value>")) {
      obj[baseKey] = {
        [colorProperty]: value.replace("<alpha-value>", "100%"),
      } as { "background-color": string } | { color: string } | { "border-color": string };;
      for (let i = 0; i <= 100; i += 5) {
        obj[`${baseKey}-${i}`] = {
          [colorProperty]: value.replace("<alpha-value>", `${i}%`),
        } as { "background-color": string } | { color: string } | { "border-color": string };;
      }
    }
  }
  return obj;
}
