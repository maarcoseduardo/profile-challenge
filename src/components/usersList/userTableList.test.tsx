import { render } from "@testing-library/react";
import { UsersTableList } from "./usersTableList";

const usersTableProps = {
  currentItems: []
};

describe("<UsersResponsiveList />", () => {
  test("should be a have UsersResponsiveList", () => {
    const { getByLabelText } = render(<UsersTableList {...usersTableProps} />);

    const users = getByLabelText(/users-table-list/i);

    expect(users).toBeInTheDocument();
  });
});
