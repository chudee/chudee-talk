import React, { Component } from "react";
import styled from "styled-components";

const GlobalNavigationContainerWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: darkslategray;
`;

const AppTitleWrapper = styled.span`
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.9);
`;

const Settings = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem 0.5rem;
`;

const SettingItem = styled.li`
  color: rgba(255, 255, 255, 0.7);
  padding: 0 0.2rem;
`;

class GlobalNavigationContainer extends Component {
  render() {
    return (
      <GlobalNavigationContainerWrapper>
        <AppTitleWrapper>
          chudee<b>talk</b>
        </AppTitleWrapper>
        <Settings>
          <SettingItem>_</SettingItem>
          <SettingItem>ㅁ</SettingItem>
          <SettingItem>X</SettingItem>
        </Settings>
      </GlobalNavigationContainerWrapper>
    );
  }
}

export default GlobalNavigationContainer;
