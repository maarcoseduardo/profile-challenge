import React from "react";
import { ProfileAddress } from "./profileAddress";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

const profileProps = {
  profileCountry: "Brazil",
  profileState: "PE",
  profileCity: "Olinda",
  profileStreet: "Rua",
  profileNumber: 12,
};

describe("<ProfileAddress />", () => {
  test("should be a have ProfileAdress", () => {
    const { getByLabelText } = render(<ProfileAddress {...profileProps} />);

    const profile = getByLabelText(/profile-address/i);
    
    expect(profile).toBeInTheDocument();
  });
});
