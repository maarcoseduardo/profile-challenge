import { render } from "@testing-library/react";
import { UsersResponsiveList } from "./usersResponsiveList";

const usersResponsiveProps = {
  currentItems: []
};

describe("<UsersResponsiveList />", () => {
  test("should be a have UsersResponsiveList", () => {
    const { getByLabelText } = render(<UsersResponsiveList {...usersResponsiveProps} />);

    const users = getByLabelText(/users-responsive-list/i);

    expect(users).toBeInTheDocument();
  });
});
