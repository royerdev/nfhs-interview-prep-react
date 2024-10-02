import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFoundPage", () => {
  it("renders the 404 Not Found heading", () => {
    render(<NotFound />);
    const heading = screen.getByText("404 Not Found");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-3xl");
  });

  it("renders the apology message", () => {
    render(<NotFound />);
    const message = screen.getByText(
      "Sorry, the page you are looking for does not exist."
    );
    expect(message).toBeInTheDocument();
  });
});
