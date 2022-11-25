import React from "react";
import { Header } from ".";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "@remix-run/router";
import { Router } from "react-router-dom";

describe("<Header />", () => {
  test("should be a have Header", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    const { getByLabelText } = render(
      <Router navigator={history} location={"/"}>
        <Header />
      </Router>
    );

    const header = getByLabelText(/header/i);
    expect(header).toBeInTheDocument();
  });
});
