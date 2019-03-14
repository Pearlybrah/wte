import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                margin: "0 0 0 3em"
              }}
              className="col s4 brand-logo black-text"
            >
              What To Eat
            </Link>
            <Link
              to="/spinner"
              style={{
                fontFamily: "monospace",
                margin: "0 0 0 27em"
              }}
              className="col s4 brand-logo black-text"
            >
              SpinForFun
            </Link>
            <Link
              to="/aboutus"
              style={{
                fontFamily: "monospace",
                margin: "0 0 0 23em"
              }}
              className="col s4 brand-logo black-text"
            >
              About
            </Link>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                margin: "0 0 0 84em"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

//Line 8 is where you can change the color
//Line 15 is a Materize CDN ClassName Docs are here https://materializecss.com/
//Line 17 is where the centered text is located
