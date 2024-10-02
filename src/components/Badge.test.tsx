import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

jest.mock("@iconify/react", () => ({
  Icon: ({ icon }: { icon: string }) => (
    <span data-testid="iconify" data-icon={icon} />
  ),
}));

describe("Badge component", () => {
  it("renders the text correctly", () => {
    render(<Badge text="New" />);

    const badgeText = screen.getByText("New");
    expect(badgeText).toBeInTheDocument();
  });

  it("renders an icon if provided", () => {
    const iconName = "mdi:star";
    render(<Badge text="Star Badge" icon={iconName} />);

    const iconElement = screen.getByTestId("iconify");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", iconName);
  });

  it("does not render an icon if not provided", () => {
    render(<Badge text="No Icon Badge" />);

    const iconElement = screen.queryByTestId("iconify");
    expect(iconElement).not.toBeInTheDocument();
  });
});
