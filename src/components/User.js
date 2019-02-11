import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { loginUser } from "../actions/userAction";

class User extends Component {
  state = {
    username: "",
    valid: true
  };

  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { redirectToHome, connection, loginUser } = this.props;
    const { username } = this.state;
    const message = { username, type: "addUsername" };
    connection.send(JSON.stringify(message));
    connection.onmessage = message => {
      let data = JSON.parse(message.data);
      if (data.status === "success") {
        loginUser({ username });
      } else {
        this.setState({ valid: false });
      }
    };
    redirectToHome();
  };

  render() {
    const { valid } = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter your name" onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {valid ? <div /> : <div>Username exists</div>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser(name) {
      dispatch(loginUser(name));
    },
    redirectToHome() {
      dispatch(push("/createRoom"));
    }
  };
}

export default connect(null, mapDispatchToProps)(User);
