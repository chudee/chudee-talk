import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabWrapper = styled.li`
  margin-right: 10px;
  text-align: center;
  border: ;
`;

const StyledButton = styled.button`
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: transparent;
  width: 35px;
  height: 35px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;

const ConfigTab = ({ url, icon }) => {
  return (
    <TabWrapper>
      <StyledButton>{icon}</StyledButton>
    </TabWrapper>
  );
};

export default ConfigTab;
