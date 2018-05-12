import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper } from "Components";
import { TabContainer, GlobalNavigationContainer } from "Containers";

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalNavigationContainer />
        <TabContainer />
        <Content />
      </Wrapper>
    );
  }
}

export default Home;
