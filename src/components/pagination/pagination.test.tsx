import { Pagination } from ".";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { paginationProps } from "./pagination.mock";

describe("<Pagination />", () => {
  test("should be a have Pagination", () => {
    const { getByLabelText } = render(<Pagination {...paginationProps} />);

    const pagination = getByLabelText(/pagination/i);
    
    expect(pagination).toBeInTheDocument();
  });
});
