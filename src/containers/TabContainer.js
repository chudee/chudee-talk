import React, { Component } from "react";
import styled from "styled-components";
import * as fa from "react-icons/lib/fa";

const TabContainerWrapper = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: darkslategray;
`;

const TabWrapper = styled.li`
  text-align: center;
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

const Tab = ({ name }) => {
  return (
    <TabWrapper>
      {name}
      <fa.FaArrowDown />
    </TabWrapper>
  );
};

class TabContainer extends Component {
  state = {
    tabs: [
      { name: "test1" },
      { name: "test2" },
      { name: "test3" },
      { name: "test4" }
    ]
  };

  render() {
    const { tabs } = this.state;

    return (
      <TabContainerWrapper>
        <Left>
          <Tab name={tabs[0].name} />
          <Tab name={tabs[1].name} />
          <Tab name={tabs[2].name} />
          <Tab name={tabs[3].name} />
        </Left>
        <Right>
          <div>asdasd</div>
          <div>asdasda</div>
        </Right>
      </TabContainerWrapper>
    );
  }
}

export default TabContainer;
