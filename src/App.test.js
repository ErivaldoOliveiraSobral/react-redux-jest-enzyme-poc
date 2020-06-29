import React from "react";
import { shallow } from "enzyme";
require("./setupTests");

describe("getting starter", () => {
  it('Test Snapshot', () => {
    const CustomComponent = () => <div test="teste"></div>;
    const wrapper = shallow(<CustomComponent />);
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div test=\\"teste\\"></div>"`
    );
  })
});
