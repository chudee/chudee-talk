import React, { Component } from "react";
import styled from "styled-components";

import {
  FriendTab,
  ChattingTab,
  MoreTab,
  NotificationTab,
  MenuTab
} from "Components/Tab/Tabs";

const TabContainerWrapper = styled.nav`
  width: 100%;
  height: 3.5rem;
  display: flex;
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
