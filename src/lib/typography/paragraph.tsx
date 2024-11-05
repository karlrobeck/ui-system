import { Component, JSX } from "solid-js";
import { getTheme } from "../theme/provider.tsx";
import { cn } from "../utils.ts";
import Text from "./text.tsx";

const Paragraph: Component<
  { children: JSX.Element } & JSX.HTMLAttributes<HTMLParagraphElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, ...rest } = props;

  return (
    <Text as="p" {...rest} class={cn(typography.p, rest.class)}>
      {children}
    </Text>
  );
};

export default Paragraph;
