import { Meta, Story } from "@storybook/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { UsersResponsiveList } from "./usersResponsiveList";

export default {
  title: "usersList/responsiveList",
  component: UsersResponsiveList,
} as Meta<typeof UsersResponsiveList>;

const usersTableListProps = {
  currentItems: [],
};

export const Default: Story = () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  return (
    <Router navigator={history} location={"/"}>
      <UsersResponsiveList {...usersTableListProps} />
    </Router>
  );
};
