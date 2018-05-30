import React from "react";
import styled from "styled-components";

const ListGroupWrapper = styled.ul`
  height: 100%;
  overflow-y: scroll;
`;

const ListGroup = props => {
  return <ListGroupWrapper>{props.children}</ListGroupWrapper>;
};

export default ListGroup;
