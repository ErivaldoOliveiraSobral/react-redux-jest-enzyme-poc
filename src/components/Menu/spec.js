import React from "react";
import { shallow, mount } from "enzyme";
require("../../setupTests");

import { Menu } from ".";

describe("<Menu />", () => {
  const videosMock = [
    {
      id: 1,
      name: "Teste",
      url: "https://google.com.br",
      selected: false,
    },
    {
      id: 2,
      name: "Teste",
      url: "https://google.com.br",
    },
    {
      id: 3,
      name: "Teste",
      url: "https://google.com.br",
    }
  ];
  const props = {
    dispatch: jest.fn(),
    handleSelectedVideo: jest.fn(),
    videos: videosMock,
  };
  it("render options", () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper.find('[data-test="videos"]')).toHaveLength(3);
  });
});
