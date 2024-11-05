import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

const AspectRatio: Component<{
  children: JSX.Element;
  as?: keyof HTMLElementTagNameMap;
  ratio?: number;
}> = (props) => {
  const { children, as = "div", ratio = 1 } = props;

  return (
    <Dynamic component={as} style={{ "aspect-ratio": ratio }}>
      {children}
    </Dynamic>
  );
};

export default AspectRatio;
