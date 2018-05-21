import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  TabContainer,
  HeaderContainer,
  ChattingContainer,
  FriendsContainer,
  MoreContainer
} from "Containers";
import { HomeWrapper, ContentsWrapper } from "Components/Wrapper";

class Home extends Component {
  render() {
    const { match } = this.props;

    return (
      <HomeWrapper>
        <HeaderContainer />
        <TabContainer />
        <ContentsWrapper>
          <Switch>
            <Redirect exact from="/" to="/friends" />
            <Route path={`/friends`} component={FriendsContainer} />
            <Route path={`/chatting`} component={ChattingContainer} />
            <Route path={`/more`} component={MoreContainer} />
            <Route component={NoMatch} />
          </Switch>
        </ContentsWrapper>
      </HomeWrapper>
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
