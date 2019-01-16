import * as React from "react";
import { shallow } from "enzyme";
import { Dialog } from "./";

const node = (
  <div>
    <Dialog open={true} onClose={() => null} />
  </div>
);

describe("Testing <Dialog/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node);
    expect(wrapper.length).toBe(1);
  });
});
