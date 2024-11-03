import { Component, JSX } from "solid-js";
import { getTheme } from "../theme/provider";
import Text from "./text";

const Blockquote: Component<
  { cite: string; children: JSX.Element } & JSX.HTMLAttributes<HTMLElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, ...rest } = props;

  return (
    <Text
      as="blockquote"
      {...rest}
      class={`${rest.class} ${typography.blockquote}`}
    >
      {children}
    </Text>
  );
};

export default Blockquote;
