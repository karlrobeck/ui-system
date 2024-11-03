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
      <style>
        {`
          :root {
            --primary: ${props.theme.colors.light?.primary};
            --primary-foreground: ${props.theme.colors.light?.primaryForeground};
            --secondary: ${props.theme.colors.light?.secondary};
            --secondary-foreground: ${props.theme.colors.light?.secondaryForeground};
            --background: ${props.theme.colors.light?.background};
            --foreground: ${props.theme.colors.light?.foreground};
            --border: ${props.theme.colors.light?.border};
            --muted: ${props.theme.colors.light?.muted};
            --card: ${props.theme.colors.light?.card};
            --card-foreground: ${props.theme.colors.light?.cardForeground};
            --popover: ${props.theme.colors.light?.popover};
            --popover-foreground: ${props.theme.colors.light?.popoverForeground};
            --border: ${props.theme.colors.light?.border};
            --ring: ${props.theme.colors.light?.ring};
            --radius: ${props.theme.colors.light?.radius};
          }
          .dark {
            --primary: ${props.theme.colors.dark?.primary};
            --primary-foreground: ${props.theme.colors.dark?.primaryForeground};
            --secondary: ${props.theme.colors.dark?.secondary};
            --secondary-foreground: ${props.theme.colors.dark?.secondaryForeground};
            --background: ${props.theme.colors.dark?.background};
            --foreground: ${props.theme.colors.dark?.foreground};
            --border: ${props.theme.colors.dark?.border};
            --muted: ${props.theme.colors.dark?.muted};
            --card: ${props.theme.colors.dark?.card};
            --card-foreground: ${props.theme.colors.dark?.cardForeground};
            --popover: ${props.theme.colors.dark?.popover};
            --popover-foreground: ${props.theme.colors.dark?.popoverForeground};
            --border: ${props.theme.colors.dark?.border};
            --ring: ${props.theme.colors.dark?.ring};
            --radius: ${props.theme.colors.dark?.radius};
          }
        `}
      </style>
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
