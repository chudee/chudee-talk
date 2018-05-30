import React from "react";
import styled from "styled-components";

const StatusMessageWrapper = styled.span`
  font-size: 0.75rem;
  color: #555;
  font-weight: 500;
  margin-right: 1rem;
  width: 45%;
  text-align: right;
  white-space: pre-line;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

const StatusMessage = () => {
  return <StatusMessageWrapper>상태 메세지</StatusMessageWrapper>;
};

export default StatusMessage;
