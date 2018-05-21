import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Button, Welcome } from "@storybook/react/demo";

import { Search, FigureImage } from "Components";
import { ChattingList, ChattingItem } from "Components/Chatting";
import {
  FriendTab,
  ChattingTab,
  MoreTab,
  NotificationTab,
  MenuTab
} from "Components/Tab/Tabs";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

storiesOf("Components", module)
  .add("FigureImage", () => (
    <FigureImage
      url={
        "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
      }
    />
  ))
  .add("ChattingList", () => <ChattingList />)
  .add("ChattingItem", () => <ChattingItem />)
  .add("Search", () => (
    <div>
      <Search placeholder="이름 검색" isMore={false} />
      <Search placeholder="채팅방 이름, 참여자 검색" isMore={true} />
    </div>
  ))
  .add("Tabs", () => <FriendTab />);
//   <div>

//     <ChattingTab />
//     <MoreTab />
//     <NotificationTab />
//     <MenuTab />
//   </div>
// ));

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
