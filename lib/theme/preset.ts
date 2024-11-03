import { Theme } from "./types";

export const defaultTheme: Theme = {
  colors: {
    light: {
      primary: "blue",
      primaryForeground: "white",
      secondary: "green",
      secondaryForeground: "white",
      accent: "yellow",
      accentForeground: "black",
      background: "white",
      foreground: "black",
      muted: "gray",
      mutedForeground: "black",
      card: "white",
      cardForeground: "black",
      popover: "white",
      popoverForeground: "black",
      border: "gray",
      ring: "blue",
      radius: "0.25rem",
    },
    dark: {
      primary: "blue",
      primaryForeground: "white",
      secondary: "green",
      secondaryForeground: "white",
      accent: "yellow",
      accentForeground: "black",
      background: "black",
      foreground: "white",
      muted: "gray",
      mutedForeground: "black",
      card: "black",
      cardForeground: "white",
      popover: "black",
      popoverForeground: "white",
      border: "gray",
      ring: "blue",
      radius: "0.25rem",
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
        row: "m-0 border-t p-0 even:bg-muted",
        col: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
      },
      body: {
        self: "",
        row: "m-0 border-t p-0 even:bg-muted",
        col: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
      },
    },
    list: "my-6 ml-6 [&>li]:mt-2",
    inlineCode:
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    lead: "text-xl",
    large: "text-2xl",
    small: "text-sm",
    muted: "text-gray-500",
  },
  components:{
    button:{
      base:'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        danger:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    }
  }
};