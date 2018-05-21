import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ddd;
`;

const FigureImage = ({ url }) => {
  console.log(url);
  return <StyledImage style={{ backgroundImage: `url(${url})` }} />;
};

export default FigureImage;
