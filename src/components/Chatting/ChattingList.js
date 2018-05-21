import React, { Component } from "react";
import styled from "styled-components";

import { ChattingItem } from "Components/Chatting";

const ChattingListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ChattingList = () => {
  return (
    <ChattingListWrapper>
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
    </ChattingListWrapper>
  );
};

export default ChattingList;
