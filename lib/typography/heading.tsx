import { Component, JSX, Match, Switch } from "solid-js";
import { getTheme } from "../theme/provider";
import { cn } from "../utils";
import Text from "./text";

const Heading: Component<
  {
    level: number;
    children: JSX.Element;
  } & JSX.HTMLAttributes<HTMLHeadingElement>
> = (props) => {
  const { typography } = getTheme();
  const { level, children, ...rest } = props;

  const tag =
    level === 1
      ? "h1"
      : level === 2
      ? "h2"
      : level === 3
      ? "h3"
      : level === 4
      ? "h4"
      : level === 5
      ? "h5"
      : "h6";

  return (
    <Text as={tag} {...rest} class={cn(Object(typography)[tag], rest.class)}>
      {children}
    </Text>
  );
};

export default Heading;
