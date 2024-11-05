export type ColorScheme = "light" | "dark";
export type ColorConfig = {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  danger: string;
  dangerForeground: string;
  success: string;
  successForeground: string;
  input:string;
  border: string;
  ring: string;
  radius: string;
};

export type TableConfig = {
  self: string;
  header: {
    self: string;
    row: string;
    col: string;
  };
  body: {
    self: string;
    row: string;
    col: string;
  };
}

export type TypographyConfig = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  p: string;
  blockquote: string;
  table: TableConfig;
  list: string;
  inlineCode: string;
  lead: string;
  large: string;
  small: string;
  muted: string;
}

export type ButtonConfig = {
  base: string;
  variant: {
    primary: {
      light: string;
      dark: string;
    };
    secondary: {
      light: string;
      dark: string;
    };
    danger: {
      light: string;
      dark: string;
    };
    outline: {
      light: string;
      dark: string;
    };
    ghost: {
      light: string;
      dark: string;
    };
    link: {
      light: string;
      dark: string;
    }
  },
  size: {
    default: string;
    sm: string;
    lg: string;
    icon: string;
  }
}

export type InputConfig = {
  base: {
    self: string;
    light: string;
    dark: string;
  }
}

export type AvatarConfig = {
  self: string;
}


export interface Theme {
  colors: {
    light?: ColorConfig;
    dark?: ColorConfig;
  };
  currentColorScheme: ColorScheme;
  typography: TypographyConfig;
  components: {
    button: ButtonConfig;
    input: InputConfig;
    avatar: AvatarConfig;
  }
  isDark?: boolean;
}
