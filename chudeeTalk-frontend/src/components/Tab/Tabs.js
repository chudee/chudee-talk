import React from "react";
import {
  MdPerson,
  MdNotifications,
  MdNotificationsOff,
  MdMenu
} from "react-icons/lib/md";
import { IoChatbubbles, IoAndroidMoreHorizontal } from "react-icons/lib/io";

import { Tab, ConfigTab } from "Components/Tab";
import { WithTab } from "Components/HOC";

const FriendTab = WithTab(
  <MdPerson size={40} color="inherit" />,
  "/home/friends"
)(Tab);

const ChattingTab = WithTab(
  <IoChatbubbles size={35} color="inherit" />,
  "/home/chatting"
)(Tab);

const MoreTab = WithTab(
  <IoAndroidMoreHorizontal size={40} color="inherit" />,
  "/home/more"
)(Tab);

const NotificationTab = WithTab(<MdNotifications size={20} />)(ConfigTab);
const MenuTab = WithTab(<MdMenu size={20} />)(ConfigTab);

export { FriendTab, ChattingTab, MoreTab, NotificationTab, MenuTab };
