import React from "react";

import {BookOpenText , Leaf , SlidersHorizontal, Crown, Trophy, GearSix} from "phosphor-icons";

export const SidebarData = [
  {
    title: "Learn",
    path: "/learn",
    icon: <BookOpenText size={32} />,
    cName: "nav-text",
  },
  {
    title: "Ecozones",
    path: "/eco-zones",
    icon: <Leaf size={32} />,
    cName: "nav-text",
  },
  {
    title: "DashBoard",
    path: "/dash-boards",
    icon: <SlidersHorizontal size={32} />,
    cName: "nav-text",
  },
  {
    title: "LeaderBoards",
    path: "/leader-board",
    icon: <Crown size={32} />,
    cName: "nav-text",
  },
  {
    title: "Rewards",
    path: "/rewards",
    icon: <Trophy size={32} />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <GearSix size={32} />,
    cName: "nav-text",
  },
];
