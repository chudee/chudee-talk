import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Search, FigureImage, Badge } from "Components";
import { ChattingList, ChattingItem } from "Components/Chatting";
import { UserList, UserItem } from "Components/User";
import { MoreList, MoreItem, MoreProfile } from "Components/More";
import {
  FriendTab,
  ChattingTab,
  MoreTab,
  NotificationTab,
  MenuTab
} from "Components/Tab/Tabs";

import Dummy from "../src/Dummy";

storiesOf("Components", module)
  .add("FigureImage", () => (
    <FigureImage
      url={
        "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
      }
    />
  ))
  .add("Search", () => (
    <div>
      <Search placeholder="이름 검색" isMore={false} />
      <Search placeholder="채팅방 이름, 참여자 검색" isMore={true} />
    </div>
  ))
  .add("Badge", () => <Badge pill primary text="20" />);

storiesOf("User", module)
  .add("UserList", () => <UserList />)
  .add("UserItem", () => <UserItem />); // Todo: Group 작업

storiesOf("Chatting", module)
  .add("ChattingList", () => <ChattingList />)
  .add("ChattingItem", () => <ChattingItem />);

storiesOf("More", module)
  .add("MoreProfile", () => <MoreProfile />)
  .add("MoreList", () => <MoreList list={Dummy.moreList} />)
  .add("MoreItem", () => <MoreItem item={{ title: "내 스토리" }} />); // Todo: Icon 넣는 작업
