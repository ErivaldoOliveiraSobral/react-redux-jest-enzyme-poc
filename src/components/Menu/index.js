import React from "react";

import { connect } from "react-redux";
import { selectVideo } from "../../store/actions/videos";

function Menu(props) {
  const { videos, handleSelectedVideo } = props;
  return (
    <div>
      {videos.map((video) => (
        <div
          style={{ cursor: "pointer" }}
          key={video.id}
          id={`video-${video.id}`}
          data-test="videos"
          onClick={(e) => handleSelectedVideo(videos, video.id)}
        >
          {video.name}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectedVideo(videos, id) {
    dispatch(selectVideo(videos, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

export { Menu };
