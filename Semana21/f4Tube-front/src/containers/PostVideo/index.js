import React, { Component } from "react";
import { connect } from "react-redux";

class PostVideo extends Component {
  render() {
    return (
      <div>
        <h1>POST_VIDEO</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // goToLogin: () => dispatch(push(routes.Login)),
  // goToFeed: () => dispatch(push(routes.Feed)),
})

export default connect(null, mapDispatchToProps)(PostVideo)
