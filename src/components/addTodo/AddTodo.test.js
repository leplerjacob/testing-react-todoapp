import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import AddTodo from "./AddTodo";

/* TODO
  - Change from render component to enzyme shallow
*/ 

describe("Todo properties", () => {
  let component;
  beforeEach(() => {
    const addTodo = jest.fn(() => {});
    component = render(<AddTodo addTodo={addTodo} />);
  });

  // 'yarn jest -u' updates snapshot
  test("Renders todo form component", () => {
    const tree = renderer.create(<AddTodo />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Updates date on change", () => {
    const date = "2021-10-28";

    const dateInput = component.container.querySelector("#date");

    fireEvent.change(dateInput, { target: { value: date } });

    expect(dateInput.value).toBe(date);
  });

  test("Updates todo on change", () => {
    const todo = "Walk the dog";
    const todoInput = component.container.querySelector("#todo");

    fireEvent.change(todoInput, { target: { value: todo } });

    expect(todoInput.value).toBe(todo);
  });

  test("Form resets input values on submit", () => {
    const todo = "Walk the dog";
    const todoInput = component.container.querySelector("#todo");
    const date = "2021-10-27";
    const dateInput = component.container.querySelector("#date");
    const submitBtn = component.container.querySelector("#submit");

    fireEvent.change(todoInput, { target: { value: todo } });
    fireEvent.change(dateInput, { target: { value: date } });

    fireEvent.click(submitBtn);

    expect(todoInput.value).toBe("");
    expect(dateInput.value).toBe("");
  });
});
/* 3 methods to get text rendered on component: 
    - .toHaveTextContent to search element for text
    - .getByText to retrieve element by text
    - .querySelector then expect .toHaveTextContent
*/

/* Print render component with .debug()
 */
