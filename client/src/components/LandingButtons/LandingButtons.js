import React, { Component } from "react";
import "./style.css"

class LandingButtons extends Component {
  render() {
    return (
      <div style={{ marginTop: "23em" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h5><strong>Login or Register</strong></h5>
            <br />
            <a href="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3" >Register</a>
            <a href="/login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text">Log In</a>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingButtons;

