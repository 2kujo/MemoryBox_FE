import React from "react";

import Intro from "@/pages/Intro";
import MakeBox from "@/pages/MakeBox";
import MakeMemory from "@/pages/MakeMemory";
import Memories from "@/pages/Memories";
import Memory from "@/pages/Memory";
import ServiceMain from "@/pages/ServiceMain";
import SpecialCert from "@/pages/SpecialCert";

export const RouterInfo = [
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/intro-finish",
    element: <Intro />,
  },
  {
    path: "/make-box",
    element: <MakeBox />,
  },
  {
    path: "/main",
    element: <ServiceMain />,
  },
  {
    path: "/memories",
    element: <Memories />,
  },
  {
    path: "/memories/:memoryId",
    element: <Memory />,
  },
  {
    path: "/make-memory",
    element: <MakeMemory />,
  },
  {
    path: "/special-cert",
    element: <SpecialCert/>,
  }
];
