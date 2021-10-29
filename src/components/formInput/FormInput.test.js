import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJSON from "enzyme-to-json";
import FormInput from "./FormInput";

Enzyme.configure({ adapter: new Adapter() });

describe("FormInput properties", () => {
  test("renders FormInput component", () => {
    let wrapper = shallow(<FormInput />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});