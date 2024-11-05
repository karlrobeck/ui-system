import { Component, JSX, useContext } from "solid-js";
import { createContext } from "solid-js";
import { Theme } from "./types.ts";

const ProviderContext = createContext<Theme>();

export const ThemeProvider: Component<{
  theme: Theme;
  children: JSX.Element;
}> = (props) => {
  return (
    <>
      <ProviderContext.Provider value={props.theme}>
        <div class={getTheme().isDark ? "dark" : ""}>{props.children}</div>
      </ProviderContext.Provider>
    </>
  );
};

export function getTheme() {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error("No theme provided");
  }

  if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
    context.currentColorScheme = "dark";
    context.isDark = true;
  }

  if (globalThis.matchMedia("(prefers-color-scheme: light)").matches) {
    context.currentColorScheme = "light";
    context.isDark = false;
  }

  return context;
}
