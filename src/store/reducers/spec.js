import { VIDEO_SELECIONADO } from "../actions/actionTypes";
import { videos as videoReducer, initialState } from "./videos";

describe("Teste Videos Reducer", () => {
  it("When initial state Reducer", () => {
    const { videos } = videoReducer(initialState, { type: "", payload: "" });
    expect(videos).toHaveLength(3);
  });

  it("Initial payload Video is empty", () => {
    const { video } = videoReducer(initialState, { type: "", payload: "" });
    expect(video).toEqual({});
  });

  it(`When ${VIDEO_SELECIONADO} Reducer is called`, () => {
    const payload = {
      video: {
        id: 1,
        name: "Desvendando o Redux na prática",
        url: "https://www.youtube.com/watch?v=u99tNt3TZf8",
        selected: false,
      },
    };
    const { video } = videoReducer(initialState, { type: VIDEO_SELECIONADO, payload });
    expect(video).not.toEqual(payload.video);
  });
});
