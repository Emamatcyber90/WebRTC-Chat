import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { pickRoom } from "../../actions/roomAction";
import { isCreator } from "../../actions/userAction";

class NewRoom extends Component {
  state = {
    roomname: "",
    valid: true
  };

  renderNewRoom = (message, newRoom) => {
    const { redirectToShowPage } = this.props;
    let data = JSON.parse(message.data);
    if (data.status === "success") {
      this.props.isCreator();
      this.props.pickRoom(newRoom);
    } else {
      this.setState({ valid: false });
    }
    redirectToShowPage();
  };

  handleChange = e => {
    this.setState({
      roomname: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { roomname } = this.state;
    const message = { roomname, type: "addRoomname" };
    this.props.connection.send(JSON.stringify(message));
    this.props.connection.onmessage = message => {
      this.renderNewRoom(message, roomname);
    };
  };

  render() {
    return (
      <div>
        <h3>Create a Room</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter room name" onChange={this.handleChange} />
        </form>

        {this.state.valid ? <div /> : <div>Name already exists</div>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    isCreator() {
      dispatch(isCreator());
    },
    pickRoom(newRoom) {
      dispatch(pickRoom(newRoom));
    },
    redirectToShowPage() {
      dispatch(push("/showPage"));
    }
  };
}

export default connect(null, mapDispatchToProps)(NewRoom);
