import React from "react";
import { render } from "@testing-library/react";
import { ButtonElement } from "./ButtonElement";

describe("ButtonElement", () => {
  it("renders button with default text", () => {
    const { getByText } = render(<ButtonElement />);
    const button = getByText("Button text");
    expect(button).toBeInTheDocument();
  });
});
