import React from "react";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "@remix-run/router";
import { Router } from "react-router-dom";
import { ProfileDetails } from "./profileDetails";


const profileProps = {
  profilePicture: "",
  profileName: "Marcos",
  profileLastName: "Eduardo",
};

describe("<ProfileDetails />", () => {
  test("should be a have ProfileDetails", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    const { getByLabelText } = render(
      <Router navigator={history} location={"/"}>
        <ProfileDetails {...profileProps} />
      </Router>
    );

    const profile = getByLabelText(/profile-details/i);
    
    expect(profile).toBeInTheDocument();
  });
});
