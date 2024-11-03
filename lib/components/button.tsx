import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { getTheme } from "../theme/provider";
import { cn } from "../utils";

type ButtonProps<T extends keyof HTMLElementTagNameMap> = {
  children: JSX.Element;
  as?: T;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost" | "link";
  size?: "sm" | "lg" | "default" | "icon";
} & JSX.IntrinsicElements[T];

const Button = <T extends keyof HTMLElementTagNameMap>(
  props: ButtonProps<T>
) => {
  const { components } = getTheme();
  const {
    children,
    as = "button",
    variant = "primary",
    size = "default",
    ...rest
  } = props;
  return (
    <Dynamic
      component={as as any}
      {...rest}
      class={cn(
        components.button.base,
        Object(components.button.variant)[variant],
        Object(components.button.size)[size],
        rest.class
      )}
    >
      {children}
    </Dynamic>
  );
};

export default Button;
