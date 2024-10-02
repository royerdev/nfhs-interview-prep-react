import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("@iconify/react", () => ({
  Icon: ({ icon }: { icon: string }) => (
    <span data-testid="iconify" data-icon={icon} />
  ),
}));

test("instantiates the app", () => {
  expect(() => render(<App />)).not.toThrow();
});
