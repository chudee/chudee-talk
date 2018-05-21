import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabWrapper = styled.li`
  margin-left: 1rem;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
  &.active {
    color: rgba(255, 255, 255, 1);
  }
`;

const Tab = ({ url, icon }) => {
  return (
    <TabWrapper>
      <StyledNavLink to={url}>{icon}</StyledNavLink>
    </TabWrapper>
  );
};

export default Tab;
