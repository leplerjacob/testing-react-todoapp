import React from "react";
import renderer from "react-test-renderer";
import AddTodo from "./AddTodo";

// 'jest -u' updates snapshot
test("App renders todo form", () => {
  const tree = renderer.create(<AddTodo />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("Default form for date is current date", () => {});

// test("Updates value of input on change", () => {});

// test("Form resets input values on submit", () => {});
