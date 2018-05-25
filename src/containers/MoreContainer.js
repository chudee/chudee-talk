import React, { Component } from "react";
import styled from "styled-components";

import { MoreProfile, MoreList } from "Components/More";
import {
  MdSettings,
  MdSentimentVerySatisfied,
  MdInfo
} from "react-icons/lib/md";
import { FaQuestionCircle } from "react-icons/lib/fa";
import { IoChatbubbles, IoErlenmeyerFlask } from "react-icons/lib/io";
import { GoMarkGithub } from "react-icons/lib/go";

const MoreContainerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 6.875rem - 1px);
`;

class MoreContainer extends Component {
  state = {
    list: [
      { id: 1, icon: MdSettings, title: "설정" },
      { id: 2, icon: IoChatbubbles, title: "오픈 채팅 (beta)" },
      { id: 3, icon: GoMarkGithub, title: "깃 허브" },
      { id: 4, icon: MdSentimentVerySatisfied, title: "이모티콘" },
      { id: 5, icon: FaQuestionCircle, title: "도움말" },
      { id: 6, icon: IoErlenmeyerFlask, title: "실험실" },
      { id: 7, icon: MdInfo, title: "추디톡 정보" }
    ]
  };
  render() {
    return (
      <MoreContainerWrapper>
        <MoreProfile />
        <MoreList list={this.state.list} />
      </MoreContainerWrapper>
    );
  }
}

export default MoreContainer;
