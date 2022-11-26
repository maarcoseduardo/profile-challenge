import { ProfileAboutMe } from "./profileAboutMe";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

const profileProps = {
  profileUsername: "username",
  profileGender: "male",
  profileAge: 27,
  profileEmail: "marcos@gmail.com",
  profilePhone: "8199999999",
};

describe("<ProfileAboutMe />", () => {
  test("should be a have ProfileAboutMe", () => {
    const { getByLabelText } = render(<ProfileAboutMe {...profileProps} />);
    
    const profile = getByLabelText(/profile-about/i);
    
    expect(profile).toBeInTheDocument();
  });
});
