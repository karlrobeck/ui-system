import { Component, JSX } from "solid-js";
import { getTheme } from "../theme/provider.tsx";
import { cn } from "../utils.ts";
import Text from "./text.tsx";

const Code: Component<
  { children: JSX.Element } & JSX.HTMLAttributes<HTMLElement>
> = (props) => {
  const { typography } = getTheme();

  const { children, ...rest } = props;

  return (
    <Text as="code" {...rest} class={cn(typography.inlineCode, rest.class)}>
      {children}
    </Text>
  );
};

export default Code;
