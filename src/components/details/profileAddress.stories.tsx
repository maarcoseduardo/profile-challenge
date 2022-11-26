import { Meta, Story } from "@storybook/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { ProfileAddress } from "./profileAddress";

export default {
  title: "usersList/tableList",
  component: ProfileAddress,
} as Meta<typeof ProfileAddress>;

  const profileProps = {
    profileCountry: "Brazil",
    profileState: "PE",
    profileCity: "Olinda",
    profileStreet: "Rua",
    profileNumber: 12,
  };

export const Default: Story = () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
  
    return (
      <Router navigator={history} location={"/"}>
        <ProfileAddress {...profileProps}/>
      </Router>
    );
  };
  