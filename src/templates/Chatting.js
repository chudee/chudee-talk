import React, { Component } from "react";
import styled from "styled-components";

const Test = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Chatting extends Component {
  render() {
    return <Test>chatting</Test>;
  }
}

export default Chatting;
