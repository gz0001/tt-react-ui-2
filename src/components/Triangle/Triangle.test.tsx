import * as React from "react";
import { shallow } from "enzyme";
import { Triangle } from "./";

const node = <Triangle />;

describe("Testing <Triangle/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node);
    expect(wrapper.length).toBe(1);
  });
});
