import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

const StyledDisplay = styled.div`
  border: 1px solid #000;
  height: 270px;
  width: 550px;
  margin-left: 50px;
  margin-bottom: 10px;
  margin-top: 30px;
  text-align: left;
  padding: 15px;
  overflow: scroll;
`

class Display extends Component {

  render() {
    return (
      <StyledDisplay>
        {this.props.chat.map(msg => <div key={msg.message}><b>{msg.username}:</b> {msg.message}</div>)}
      </StyledDisplay>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat.messages
    };
};

export default connect(mapStateToProps)(Display)
