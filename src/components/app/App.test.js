import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App properties", () => {
  beforeEach(() => {
    component = render(<App />);
  });

  test("renders app component", () => {});

  test("app renders todoApp component", () => {});

  test("app has initial state", () => {});

  test("app state changes after event", () => {});
});
