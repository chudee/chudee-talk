import React, { Component } from "react";
import styled from "styled-components";

import Search from "Components/Search";

const FriendsWrapper = styled.div`
  width: 100%;
  height: calc(100% - 3rem - 1px);
`;

class Friends extends Component {
  render() {
    return (
      <FriendsWrapper>
        <Search />
      </FriendsWrapper>
    );
  }
}

export default Friends;
