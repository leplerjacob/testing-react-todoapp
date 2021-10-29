import React from "react";
import Enzyme, { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import AddTodo from "../addTodo/AddTodo";

Enzyme.configure({ adapter: new Adapter() });

describe("App properties", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  test("renders app component", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("app renders addTodo component", () => {
    expect(wrapper.find(AddTodo)).toHaveLength(1);
  });

  test("app renders ListTodos component", () => {
    expect(wrapper.find(ListTodos)).toHaveLength(1);
  });

  // test("updates state upon addTodo function", () => {

  // });
});
