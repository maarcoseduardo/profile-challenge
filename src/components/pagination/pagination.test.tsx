import React from "react";
import { Pagination } from ".";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

const paginationProps = {
  setCurrentPage: () => 0,
  pages: 5,
  currentPage: 1,
};

describe("<Pagination />", () => {
  test("should be a have Pagination", () => {
    const { getByLabelText } = render(<Pagination {...paginationProps} />);

    const pagination = getByLabelText(/pagination/i);
    
    expect(pagination).toBeInTheDocument();
  });
});
