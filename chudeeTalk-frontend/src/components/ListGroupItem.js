import React from "react";
import styled from "styled-components";

const ListGroupItemWarpper = styled.li`
  display: flex;
  height: ${p => p.height};
  background-color: ${p => (p.bg ? p.bg : null)};
  &: hover ${p => (p.active ? "{background-color: rgba(0, 0, 0, 0.05)}" : null)};
  &: active
    ${p => (p.active ? "{background-color: rgba(0, 0, 0, 0.08)}" : null)};
`;

const ListGroupItem = props => {
  return (
    <ListGroupItemWarpper
      height={props.height}
      bg={props.bg}
      active={props.active}
    >
      {props.children}
    </ListGroupItemWarpper>
  );
};

export default ListGroupItem;
