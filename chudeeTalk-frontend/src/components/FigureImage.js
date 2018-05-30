import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: ${p => (p.size ? p.size : "40px")};
  height: ${p => (p.size ? p.size : "40px")};
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

const FigureImage = ({ url, size }) => {
  return <StyledImage size={size} style={{ backgroundImage: `url(${url})` }} />;
};

export default FigureImage;
