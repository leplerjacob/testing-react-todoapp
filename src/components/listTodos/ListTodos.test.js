import React from "react";
import ListTodos from "./ListTodos";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJSON from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("ListTodos properties", () => {
  let wrapper;
  beforeEach(() => {
    const todos = [
      { id: 1, todo: "Walk the dog", date: "2021-10-20" },
      { id: 2, todo: "Visit grandparents", date: "2021-10-22" },
      { id: 3, todo: "Attend React conference", date: "2021-10-26" },
    ];
    wrapper = shallow(<ListTodos todos={todos} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  test("renders ListTodos component", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  test("displays correct number of data passed as prop", () => {
    expect(wrapper.find("ul").children()).toHaveLength(3);
  });
  test("shows text of todo item", () => {
    expect(wrapper.find("ul").children("li").at(0).text()).toBe("Walk the dog");
    expect(wrapper.find("ul").children("li").at(1).text()).toBe(
      "Visit grandparents"
    );
    expect(wrapper.find("ul").children("li").at(2).text()).toBe(
      "Attend React conference"
    );
  });

});
