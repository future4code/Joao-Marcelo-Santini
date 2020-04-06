import React, { Component } from "react";
import { connect } from "react-redux";

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SignUPPPP</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // goToLogin: () => dispatch(push(routes.Login)),
  // goToFeed: () => dispatch(push(routes.Feed)),
})

export default connect(null, mapDispatchToProps)(SignUp)
