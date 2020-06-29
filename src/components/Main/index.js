import React from "react";
import { connect } from "react-redux";
import ReactPlayer from 'react-player/lazy'

function Main(props) {
  const { video, children } = props;
  return (
    <>
      <div data-test="children">{children}</div>
      {/* <a href={video.url} target="_blank">
        {video.name}
      </a> */}
      <ReactPlayer url={video.url} />
    </>
  );
}

const mapStateToProps = (state) => ({
  video: state.videos.video
});

export default connect(mapStateToProps)(Main);

export { Main };