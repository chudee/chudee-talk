import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.span`
  font-size: ${p => p.size};
  color: #000;
  font-weight: 700;
  margin-bottom: ${p => p.mb};
`;

const Title = ({ size = "0.8rem", mb, text = "카톡방 제목" }) => {
  return (
    <TitleWrapper size={size} mb={mb}>
      {text}
    </TitleWrapper>
  );
};

export default Title;
