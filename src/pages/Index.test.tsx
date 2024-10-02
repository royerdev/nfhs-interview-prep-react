import React from "react";
import { render } from "@testing-library/react";
import Index from "./Index";

jest.mock("@iconify/react", () => ({
  Icon: ({ icon }: { icon: string }) => (
    <span data-testid="iconify" data-icon={icon} />
  ),
}));

test("instantiates the page", () => {
  expect(() => render(<Index />)).not.toThrow();
});
