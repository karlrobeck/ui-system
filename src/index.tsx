import { render } from "solid-js/web";
import "./app.css";

import { Component } from "solid-js";
import {
  Blockquote,
  Heading,
  Paragraph,
  defaultTheme,
  ThemeProvider,
  Table,
  List,
  Code,
  Text,
  Button,
} from "../lib";

const Home: Component<{}> = (_props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Paragraph>Welcome to the home page</Paragraph>
      <Blockquote cite="https://example.com">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        vero unde ducimus debitis aspernatur sed officia maiores in quo
        accusamus.
      </Blockquote>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell isHeader>Header 1</Table.Cell>
            <Table.Cell isHeader>Header 2</Table.Cell>
            <Table.Cell isHeader>Header 3</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Row 1 Col 1</Table.Cell>
            <Table.Cell>Row 1 Col 2</Table.Cell>
            <Table.Cell>Row 1 Col 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 2 Col 1</Table.Cell>
            <Table.Cell>Row 2 Col 2</Table.Cell>
            <Table.Cell>Row 2 Col 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 3 Col 1</Table.Cell>
            <Table.Cell>Row 3 Col 2</Table.Cell>
            <Table.Cell>Row 3 Col 3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <List as="ol">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </List>
      <List>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </List>
      <Code>console.log("Hello, World!")</Code>
      <Text as="p">Hello</Text>
      <Button as="button" size="sm">
        Hello anchor tag
      </Button>
      <Button type="submit">Hello anchor tag</Button>
    </ThemeProvider>
  );
};

const root = document.getElementById("root");

if (root) {
  render(() => <Home />, root);
}
