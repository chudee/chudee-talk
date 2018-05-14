import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const TabWrapper = styled.li`
  margin-left: 10px;
  text-align: center;
`;

const Tab = ({ url, icon }) => {
  return (
    <TabWrapper>
      <NavLink
        to={url}
        activeStyle={{
          color: "rgba(255, 255, 255, 1.0)"
        }}
        style={{
          color: "rgba(87, 96, 111,1.0)"
        }}
      >
        {icon}
      </NavLink>
    </TabWrapper>
  );
};

export default Tab;
