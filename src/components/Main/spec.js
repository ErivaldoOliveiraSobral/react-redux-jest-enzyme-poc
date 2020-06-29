import React from "react";
import { shallow } from "enzyme";
require("../../setupTests");

import { Main } from ".";

describe("<Main />", () => {
  const videosMock = [
    {
      id: 1,
      name: "Desvendando o Redux na prática",
      url: "https://www.youtube.com/watch?v=u99tNt3TZf8",
      selected: false,
    },
    {
      id: 2,
      name: "Autenticação no React Native / ReactJS com Context API & Hooks",
      url: "https://www.youtube.com/watch?v=KISMYYXSIX8",
    },
    {
      id: 3,
      name: "React Hooks na prática",
      url: "https://www.youtube.com/watch?v=6WB16wZS61c",
    },
  ];
  const props = {
    dispatch: jest.fn(),
    video: videosMock[0],
  };
  it("render", () => {
    const wrapper = shallow(<Main {...props}>Teste</Main>);
    expect(wrapper.find("[data-test='children']").text()).toEqual("Teste");
  });
});
