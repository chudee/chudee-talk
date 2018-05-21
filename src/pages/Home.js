import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper } from "Components";
import { Route, Switch, Redirect } from "react-router-dom";
import { TabContainer, HeaderContainer } from "Containers";

import { Friends, Chatting, More } from "../templates";

const Contents = styled.section`
  position: relative;
  width: 100%;
  height: calc(100% - 6.5rem);
`;

class Home extends Component {
  render() {
    const { match } = this.props;

    return (
      <Wrapper>
        <HeaderContainer />
        <TabContainer />
        <Contents>
          <Switch>
            <Redirect exact from="/" to="/friends" />
            <Route path={`/friends`} component={Friends} />
            <Route path={`/chatting`} component={Chatting} />
            <Route path={`/more`} component={More} />
            <Route component={NoMatch} />
          </Switch>
        </Contents>
      </Wrapper>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default Home;
