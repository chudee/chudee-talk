import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper } from "Components";
import { TabContainer, HeaderContainer } from "Containers";

const Content = styled.section`
  width: 100%;
  height: 100%;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderContainer />
        <TabContainer />
        <Content />
      </Wrapper>
    );
  }
}

export default Home;
