import React, { Component } from "react";
import styled from "styled-components";
import { MdPerson } from "react-icons/lib/md";
import { IoChatbubble, IoAndroidMoreHorizontal } from "react-icons/lib/io";

import Tap from "../components/Tab";
import WithTab from "../components/WithTab";

const TabContainerWrapper = styled.nav`
  width: 100%;
  min-height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(44, 62, 80, 1);
`;

const Left = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendTab = WithTab("/friends", <MdPerson size={50} color="inherit" />)(
  Tap
);

const ChattingTab = WithTab(
  "/chatting",
  <IoChatbubble size={40} color="inherit" />
)(Tap);

const MoreTab = WithTab(
  "/more",
  <IoAndroidMoreHorizontal size={50} color="inherit" />
)(Tap);

class TabContainer extends Component {
  render() {
    return (
      <TabContainerWrapper>
        <Left>
          <FriendTab />
          <ChattingTab />
          <MoreTab />
        </Left>
        <Right>
          <div style={{ color: "white", marginRight: 10 }}>Button1</div>
          <div style={{ color: "white", marginRight: 10 }}>Button2</div>
        </Right>
      </TabContainerWrapper>
    );
  }
}

export default TabContainer;
