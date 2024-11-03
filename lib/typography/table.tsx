import { Component, JSX, Match, Switch } from "solid-js";
import { getTheme } from "../theme/provider";
import { Dynamic } from "solid-js/web";
import { cn } from "../utils";

const Root: Component<
  { children: JSX.Element } & JSX.HTMLAttributes<HTMLTableElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, ...rest } = props;

  return (
    <table {...rest} class={cn(typography.table.self)}>
      {children}
    </table>
  );
};

const Row: Component<
  {
    children: JSX.Element;
    isHeader?: boolean;
  } & JSX.HTMLAttributes<HTMLTableRowElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, isHeader = false, ...rest } = props;
  return (
    <tr
      {...rest}
      class={cn(
        isHeader ? typography.table.header.row : typography.table.body.row,
        rest.class
      )}
    >
      {children}
    </tr>
  );
};

const Header: Component<
  { children: JSX.Element } & JSX.HTMLAttributes<HTMLTableSectionElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, ...rest } = props;

  return (
    <thead {...rest} class={`${rest.class} ${typography.table.header.self}`}>
      {children}
    </thead>
  );
};

const Body: Component<
  { children: JSX.Element } & JSX.HTMLAttributes<HTMLTableSectionElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, ...rest } = props;

  return (
    <tbody {...rest} class={`${rest.class} ${typography.table.body.self}`}>
      {children}
    </tbody>
  );
};

const Cell: Component<
  {
    children: JSX.Element;
    isHeader?: boolean;
  } & JSX.HTMLAttributes<HTMLTableCellElement>
> = (props) => {
  const { typography } = getTheme();
  const { children, isHeader = false, ...rest } = props;

  const tag = isHeader ? "th" : "td";

  return (
    <Dynamic
      component={tag}
      {...rest}
      class={cn(
        tag === "th" ? typography.table.header.col : typography.table.body.col,
        rest.class
      )}
    >
      {children}
    </Dynamic>
  );
};

export default { Root, Row, Header, Body, Cell };
