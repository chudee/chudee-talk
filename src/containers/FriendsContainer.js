import React, { Component } from "react";
import styled from "styled-components";

import Search from "Components/Search";

const FriendsContainerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 3rem - 1px);
`;

class FriendsContainer extends Component {
  render() {
    return (
      <FriendsContainerWrapper>
        <Search placeholder="이름 검색" isMore={false} />
      </FriendsContainerWrapper>
    );
  }
}

export default FriendsContainer;
