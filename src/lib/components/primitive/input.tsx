import { Component, JSX } from "solid-js";
import { cn } from "../../utils";
import { getTheme } from "../../theme/provider";

const Input: Component<{} & JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { components, isDark } = getTheme();

  const { ...rest } = props;

  return (
    <input
      {...rest}
      class={cn(
        components.input.base.self,
        isDark ? components.input.base.dark : components.input.base.light,
        rest.class
      )}
    />
  );
};

export default Input;
