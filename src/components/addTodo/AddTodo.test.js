import React from "react";
import {render} from '@testing-library/react'
import renderer from "react-test-renderer";
import AddTodo from "./AddTodo";

describe("Todo properties", () => {
  let component;
  beforeEach(() => {
    component = render(<AddTodo />);
  });

  // 'yarn jest -u' updates snapshot
  test("Renders todo form component", () => {
    const tree = renderer.create(<AddTodo />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Default date on form is current date", () => {
      
      // handles offset timezone
      let dateNow = new Date();
      const offset = dateNow.getTimezoneOffset();
      dateNow = new Date(dateNow.getTime() - (offset * 60 - 1000))
      .toISOString()
      .split("T")[0];
      
      // const dateInput = component.container.querySelector('#date')
      const dateInput = component.queryByPlaceholderText(`${dateNow}`)

    //   expect(dateInput)
  });
});

// test("Updates value of input on change", () => {});

// test("Form resets input values on submit", () => {});

/* 3 methods to get text rendered on component: 
    - .toHaveTextContent to search element for text
    - .getByText to retrieve element by text
    - .querySelector then expect .toHaveTextContent
*/

/* Print render component with .debug()
 */
