import { children, Component, createSignal, JSX, useContext } from "solid-js";
import { createContext } from "solid-js";
import { Theme } from "./types";

const ProviderContext = createContext<Theme>();

export const ThemeProvider: Component<{
  theme: Theme;
  children: JSX.Element;
}> = (props) => {
  return (
    <>
      <ProviderContext.Provider value={props.theme}>
        {props.children}
      </ProviderContext.Provider>
    </>
  );
};

export function getTheme() {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error("No theme provided");
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    context.currentColorScheme = "dark";
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    context.currentColorScheme = "light";
  }

  return context;
}
