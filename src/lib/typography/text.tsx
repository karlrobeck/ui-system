import { Component, JSX } from "solid-js";
import { getTheme } from "../theme/provider";
import { Dynamic } from "solid-js/web";
import { cn } from "../utils";

const Text: Component<
  {
    children: JSX.Element;
    as?: keyof HTMLElementTagNameMap;
    size?: "sm" | "lg" | "default";
    muted?: boolean;
    lead?: boolean;
  } & JSX.HTMLAttributes<any>
> = (props) => {
  const { typography } = getTheme();
  const {
    children,
    as,
    size = "default",
    muted = false,
    lead = false,
    ...rest
  } = props;
  const Tag = as || "span";
  return (
    <Dynamic
      component={Tag}
      {...rest}
      class={cn(
        lead && typography.lead,
        size === "lg" && typography.large,
        size === "sm" && typography.small,
        muted && typography.muted,
        rest.class
      )}
    >
      {children}
    </Dynamic>
  );
};

export default Text;
