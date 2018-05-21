import React, { Component } from "react";
import styled from "styled-components";

import FigureImage from "Components/FigureImage";

const ChattingItemWrapper = styled.li`
  display: flex;
  height: 80px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.08);
  }
  .user {
    flex-basis: 80px;
    position: relative;
  }
  .room {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    .header {
      display: flex;
      justify-content: space-between;
      flex: 1;

      .time {
        font-size: 0.75rem;
        color: #aaa;
        margin-right: 0.8rem;
      }
    }

    .contents {
      padding-top: 5px;
      flex: 1;
    }
  }
`;

const ChattingItem = () => {
  return (
    <ChattingItemWrapper>
      <div className="user">
        <FigureImage
          url={
            "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
          }
        />
      </div>
      <ul className="room">
        <li className="header">
          <p>
            <b> 카카오톡 </b>
          </p>
          <i />
          <p className="time"> 오후 3:40 </p>
        </li>
        <li className="contents">끄아~~ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇ</li>
      </ul>
    </ChattingItemWrapper>
  );
};

export default ChattingItem;
