import React from "react";
import styled from "styled-components";

const TextWrapper = styled.span`
  font-size: 0.8rem;
  color: ${p => (p.color ? p.color : "#aaa")};
  font-weight: ${p => (p.fw ? p.fw : "400")};
  width: ${p => (p.width ? p.width : "80%")};
  margin-bottom: ${p => (p.mb ? p.mb : "0")};
  white-space: pre-line;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

const Text = ({
  mb,
  width,
  fw,
  color,
  text = "메세지 ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁ노엄나ㅗ엄노안머 ㅁㄴㅇㄴㅁㅇㅁㄴㅇaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}) => {
  return (
    <TextWrapper mb={mb} width={width} fw={fw} color={color}>
      {text}
    </TextWrapper>
  );
};

export default Text;
