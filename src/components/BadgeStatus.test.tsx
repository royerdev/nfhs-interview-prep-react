import React from "react";
import { render, screen } from "@testing-library/react";
import BadgeStatus from "./BadgeStatus";

jest.mock("@iconify/react", () => ({
  Icon: ({ icon }: { icon: string }) => (
    <span data-testid="iconify" data-icon={icon} />
  ),
}));

describe("BadgeStatus component", () => {
  it("renders with upcoming status", () => {
    render(<BadgeStatus status="upcoming" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent("Upcoming");
    expect(badge).toHaveStyle({ backgroundColor: "#162c68" });

    const iconElement = screen.getByTestId("iconify");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", "fluent:list-24-filled");
  });

  it("renders with live status", () => {
    render(<BadgeStatus status="live" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent("Live");
    expect(badge).toHaveStyle({ backgroundColor: "#da374a" });

    const iconElement = screen.getByTestId("iconify");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", "fluent:live-24-filled");
  });

  it("renders with on_demand status", () => {
    render(<BadgeStatus status="on_demand" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent("On Demand");
    expect(badge).toHaveStyle({ backgroundColor: "#000" });

    const iconElement = screen.getByTestId("iconify");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute(
      "data-icon",
      "fluent:calendar-24-filled"
    );
  });
});
