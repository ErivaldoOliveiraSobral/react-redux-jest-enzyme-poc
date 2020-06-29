import { VIDEO_SELECIONADO } from "../actions/actionTypes";

export const initialState = {
  videos: [
    {
      id: 1,
      name: "Desvendando o Redux na prática",
      url: "https://www.youtube.com/watch?v=u99tNt3TZf8",
      selected: false,
    },
    {
      id: 2,
      name: "Autenticação no React Native",
      url: "https://www.youtube.com/watch?v=KISMYYXSIX8",
      selected: false,
    },
    {
      id: 3,
      name: "React Hooks na prática",
      url: "https://www.youtube.com/watch?v=6WB16wZS61c",
      selected: false,
    },
  ],
  video: {}
};

export function videos(state = initialState, action) {
    switch (action.type) {
        case VIDEO_SELECIONADO:
            return { ...state, video: action.payload };
        default:
            return { ...state };
    }
}
