// import React from 'react';
import styled from "styled-components";

const FigureImageWapper = styled.div`
  flex-basis: ${p => p.width};
  position: relative;
  display: ${p => p.flexCenter && "flex"};
  justify-content: ${p => p.flexCenter && "center"};
  align-items: ${p => p.flexCenter && "center"};
`;

export default FigureImageWapper;
