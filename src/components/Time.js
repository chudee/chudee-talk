import React from "react";
import styled from "styled-components";

const TimeWrapper = styled.span`
  font-size: 0.75rem;
  color: #aaa;
  font-weight: 300;
  margin-right: 0.5rem;
`;

const Time = () => {
  // Todo: 시간 계산 코드 (timeset등등... )
  return <TimeWrapper>오후 3:40</TimeWrapper>;
};

export default Time;
