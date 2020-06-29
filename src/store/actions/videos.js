import { VIDEO_SELECIONADO } from "./actionTypes";

export const selectVideo = (videos, id) => {
  return {
    type: VIDEO_SELECIONADO,
    payload: videos.filter(e => e.id === id)[0]
  };
};
