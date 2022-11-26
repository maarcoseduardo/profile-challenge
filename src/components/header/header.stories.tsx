import { Meta, Story } from "@storybook/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { Header } from ".";

export default {
  title: "Header/Bar",
  component: Header,
} as Meta;

export const Default: Story = () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  return (
    <Router navigator={history} location={"/"}>
      <Header />
    </Router>
  );
};
