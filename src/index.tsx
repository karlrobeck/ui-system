import { render } from "solid-js/web";
import "./app.css";

import { type Component } from "solid-js";
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
  Input,
  AspectRatio,
  Avatar,
} from "../dist/index.mjs";

const Home: Component<Record<string | number | symbol, never>> = (_props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div class="bg-background text-foreground dark:dark-bg-background dark:dark-text-foreground">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Paragraph>Welcome to the home page</Paragraph>
        <Blockquote cite="https://example.com" class="m-4">
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
        <div class="flex flex-col space-y-5">
          <Button class="w-fit" variant="primary">
            Hello anchor tag
          </Button>
          <Button class="w-fit" variant="secondary">
            Hello anchor tag
          </Button>
          <Button class="w-fit" variant="danger">
            Hello anchor tag
          </Button>
          <Button class="w-fit" variant="outline">
            Hello anchor tag
          </Button>
          <Button class="w-fit" variant="ghost">
            Hello anchor tag
          </Button>
          <Button class="w-fit" variant="link">
            Hello anchor tag
          </Button>
          <Input type="text" placeholder="holla" />
          <div class="max-w-7xl p-4">
            <AspectRatio ratio={16 / 9}>
              <img
                class="object-cover w-full h-full rounded-sm overflow-hidden"
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b"
                alt=""
              />
            </AspectRatio>
          </div>
          <div class="p-4">
            <Avatar
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b"
              fallback={<span>👨‍🚀</span>}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const root = document.getElementById("root");

if (root) {
  render(() => <Home />, root);
}
