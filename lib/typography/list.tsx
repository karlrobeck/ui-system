import { Component, JSX, Match, Switch } from "solid-js";
import { getTheme } from "../theme/provider";
import { cn } from "../utils";
import { Dynamic } from "solid-js/web";

const List: Component<
  {
    children: JSX.Element;
    as?: "ul" | "ol" | "dl";
  } & (
    | JSX.HTMLAttributes<HTMLUListElement>
    | JSX.HTMLAttributes<HTMLOListElement>
    | JSX.HTMLAttributes<HTMLDListElement>
  )
> = (props) => {
  const { typography } = getTheme();

  const { children, as = "ul", ...rest } = props;

  return (
    <>
      <Dynamic
        component={as}
        class={cn(
          as === "ol" && "list-decimal",
          as === "ul" && "list-disc",
          typography.list,
          rest.class
        )}
      >
        {children}
      </Dynamic>
    </>
  );
};

export default List;
