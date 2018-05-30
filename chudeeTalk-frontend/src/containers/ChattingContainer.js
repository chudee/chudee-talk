import React, { Component } from "react";
import styled from "styled-components";

import Search from "Components/Search";
import { ChattingList } from "Components/Chatting";

const ChattingContainerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 3rem - 1px);
`;

class ChattingContainer extends Component {
  render() {
    return (
      <ChattingContainerWrapper>
        <Search placeholder="채팅방 이름, 참여자 검색" isMore={true} />
        <ChattingList />
      </ChattingContainerWrapper>
    );
  }
}

export default ChattingContainer;
