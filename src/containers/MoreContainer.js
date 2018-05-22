import React, { Component } from "react";
import styled from "styled-components";

import { MoreProfile, MoreList } from "Components/More";

const MoreContainerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 6.875rem - 1px);
`;

class MoreContainer extends Component {
  state = {
    list: [
      { id: 1, icon: 1, title: "내 스토리" },
      { id: 2, icon: 1, title: "오픈 채팅" },
      { id: 3, icon: 1, title: "이모티콘샵" },
      { id: 4, icon: 1, title: "파일박스" },
      { id: 5, icon: 1, title: "설정" },
      { id: 6, icon: 1, title: "공지사항" },
      { id: 7, icon: 1, title: "도움말" },
      { id: 8, icon: 1, title: "실험실" },
      { id: 9, icon: 1, title: "카카오톡 정보" }
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
