import React, { Component } from "react";
import styled from "styled-components";

import FigureImage from "../components/FigureImage";
import Search from "Components/Search";

const ChattingWrapper = styled.div`
  width: 100%;
  height: calc(100% - 3rem - 1px);
`;

const StyledChattingList = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const StyledChattingItem = styled.li`
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

const ChattingList = () => {
  return (
    <StyledChattingList>
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
    </StyledChattingList>
  );
};

const ChattingItem = () => {
  return (
    <StyledChattingItem>
      <div className="user">
        <FigureImage url={require("assets/imgs/user.png")} />
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
    </StyledChattingItem>
  );
};

class Chatting extends Component {
  render() {
    return (
      <ChattingWrapper>
        <Search />
        <ChattingList />
      </ChattingWrapper>
    );
  }
}

export default Chatting;
