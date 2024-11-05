import { JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { getTheme } from "../../theme/provider.tsx";
import { cn } from "../../utils.ts";

type ButtonProps<T extends keyof HTMLElementTagNameMap> = {
  children: JSX.Element;
  as?: T;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost" | "link";
  size?: "sm" | "lg" | "default" | "icon";
} & JSX.IntrinsicElements[T];

const Button = <T extends keyof HTMLElementTagNameMap>(
  props: ButtonProps<T>
) => {
  const { components, isDark } = getTheme();
  const {
    children,
    as = "button",
    variant = "primary",
    size = "default",
    ...rest
  } = props;

  const colorMode = isDark ? "dark" : "light";

  return (
    <Dynamic
      component={as as any}
      {...rest}
      class={cn(
        components.button.base,
        Object(components.button.variant)[variant][colorMode],
        Object(components.button.size)[size],
        rest.class
      )}
    >
      {children}
    </Dynamic>
  );
};

export default Button;
