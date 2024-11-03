import { Component, JSX } from "solid-js";
import { getTheme } from "../theme/provider";
import { cn } from "../utils";
import Text from "./text";

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
