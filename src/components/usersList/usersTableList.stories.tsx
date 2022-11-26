import { Meta, Story } from "@storybook/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { UsersTableList } from "./usersTableList";

export default {
  title: "usersList/tableList",
  component: UsersTableList,
} as Meta<typeof UsersTableList>;

const usersResponsiveProps = {
    currentItems: [],
  };

export const Default: Story = () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
  
    return (
      <Router navigator={history} location={"/"}>
        <UsersTableList {...usersResponsiveProps}/>
      </Router>
    );
  };
  