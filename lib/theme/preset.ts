import { Theme } from "./types";

export const defaultTheme: Theme = {
  colors: {
    light: {
      primary: "hsla(240 5.9% 10% / <alpha-value>)",
      primaryForeground: "hsla(0 0% 98% / <alpha-value>)",
      secondary: "hsla(240 4.8% 95.9% / <alpha-value>)",
      secondaryForeground: "hsla(240 5.9% 10% / <alpha-value>)",
      accent: "hsla(240 4.8% 95.9% / <alpha-value>)",
      accentForeground: "hsla(240 5.9% 10% / <alpha-value>)",
      background: "hsla(0 0% 100%)",
      foreground: "hsla(240 10% 3.9%)",
      muted: "hsla(0 0% 100% / <alpha-value>)",
      mutedForeground: "hsla(240 10% 3.9% / <alpha-value>)",
      card: "hsla(0 0% 100% / <alpha-value>)",
      cardForeground: "hsla(240 10% 3.9% / <alpha-value>)",
      popover: "hsla(240 5.9% 10% / <alpha-value>)",
      popoverForeground: "hsla(0 0% 98% / <alpha-value>)",
      border: "hsla(240 5.9% 90% / <alpha-value>)",
      ring: "hsla(240 5.9% 10% / <alpha-value>)",
      radius: "0.5rem",
      input: "hsla(240 5.9% 90% / <alpha-value>)",
      danger: "hsla(0 84.2% 60.2% / <alpha-value>)",
      dangerForeground: "hsla(0 0% 98% / <alpha-value>)",
      success: "green",
      successForeground: "white",
    },
    dark: {
      primary: "hsla(0 0% 98% / <alpha-value>)",
      primaryForeground: "hsla(240 5.9% 10% / <alpha-value>)",
      secondary: "hsla(240 3.7% 15.9% / <alpha-value>)",
      secondaryForeground: "hsla(0 0% 98% / <alpha-value>)",
      accent: "hsla(240 3.7% 15.9% / <alpha-value>)",
      accentForeground: "hsla(0 0% 98% / <alpha-value>)",
      background: "hsl(240 10% 3.9% / <alpha-value>)",
      foreground: "hsl(0 0% 98%)",
      muted: "hsla(240 3.7% 15.9% / <alpha-value>)",
      mutedForeground: "hsla(240 5% 64.9% / <alpha-value>)",
      card: "hsla(240 10% 3.9% / <alpha-value>)",
      cardForeground: "hsla(0 0% 98% / <alpha-value>)",
      popover: "hsla(240 10% 3.9% / <alpha-value>)",
      popoverForeground: "hsla(0 0% 98% / <alpha-value>)",
      border: "hsla(240 3.7% 15.9% / <alpha-value>)",
      ring: "hsla(240 4.9% 83.9% / <alpha-value>)",
      radius: "0.5rem",
      input: "hsla(240 3.7% 15.9% / <alpha-value>)",
      danger: "hsla(0 62.8% 30.6% / <alpha-value>)",
      dangerForeground: "hsla(0 0% 98% / <alpha-value>)",
      success: "green",
      successForeground: "white",
    },
  },
  currentColorScheme: "light",
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    table: {
      self: "border-collapse w-full",
      header: {
        self: "",
        row: "m-0 border-t p-0",
        col: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
      },
      body: {
        self: "",
        row: "m-0 border-t p-0",
        col: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
      },
    },
    list: "my-6 ml-6 [&>li]:mt-2",
    inlineCode:
      "relative rounded bg-muted dark:dark-bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    lead: "text-xl",
    large: "text-2xl",
    small: "text-sm",
    muted: "text-gray-500",
  },
  components: {
    button: {
      base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      variant: {
        primary: {
          light: "bg-primary text-primary-foreground hover:bg-primary-90",
          dark: "dark-bg-primary dark-text-primary-foreground hover:dark-bg-primary-90",
        },
        danger: {
          light: "bg-danger text-danger-foreground hover:bg-danger-90",
          dark: "dark-bg-danger dark-text-danger-foreground hover:dark-bg-danger-90",
        },
        outline: {
          light:
            "border text-foreground border-input bg-background hover:bg-accent hover:text-accent-foreground",
          dark: "border dark-text-foreground dark-border-input dark-bg-background hover:dark-bg-accent hover:dark-text-accent-foreground",
        },
        secondary: {
          light: "bg-secondary text-secondary-foreground hover:bg-secondary-80",
          dark: "dark-bg-secondary dark-text-secondary-foreground hover:dark-bg-secondary-80",
        },
        ghost: {
          light: "hover:bg-accent hover:text-accent-foreground",
          dark: "hover:dark-bg-accent hover:dark-text-accent-foreground",
        },
        link: {
          light: "text-primary underline-offset-4 hover:underline",
          dark: "dark-text-primary underline-offset-4 hover:underline",
        },
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    input: {
      base:{
        self:"flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        light: "bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground",
        dark: "dark-bg-background ring-offset-background file:dark-text-foreground placeholder:dark-text-muted-foreground",
      }
    },
  },
};
