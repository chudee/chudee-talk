import React, { Component } from "react";
import styled from "styled-components";
import {
  MdPerson,
  MdNotifications,
  MdNotificationsOff,
  MdMenu
} from "react-icons/lib/md";
import { IoChatbubbles, IoAndroidMoreHorizontal } from "react-icons/lib/io";

import Tab from "../components/Tab";
import ConfigTab from "../components/ConfigTab";
import WithTab from "../components/WithTab";

const TabContainerWrapper = styled.nav`
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Left = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Right = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
`;

const FriendTab = WithTab("/friends", <MdPerson size={40} color="inherit" />)(
  Tab
);

const ChattingTab = WithTab(
  "/chatting",
  <IoChatbubbles size={35} color="inherit" />
)(Tab);

const MoreTab = WithTab(
  "/more",
  <IoAndroidMoreHorizontal size={40} color="inherit" />
)(Tab);

const NotificationTab = WithTab("/test", <MdNotifications size={20} />)(
  ConfigTab
);
const MenuTab = WithTab("/test2", <MdMenu size={20} />)(ConfigTab);

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
          <NotificationTab />
          <MenuTab />
        </Right>
      </TabContainerWrapper>
    );
  }
}

export default TabContainer;
