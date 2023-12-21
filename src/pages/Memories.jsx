import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import MemoryList from "@/components/common/MemoryList";
import FloatingBtn from "@/components/common/FloatingBtn";

import Image from "@/assets/images/first_tooth.png"

export default function Memories() {
  const navigate = useNavigate();
  const location = useLocation();

  // isFinished props로 받기
  const [cashBoxTitle, setCashBoxTitle] = useState("우리 민조");
  const [savingsType, setSavingsType] = useState("KB 특★별한 우리아이 적금");
  const [cashBoxAcno, setCashBoxAcno] = useState("640406-14-120472");
  const [cashBoxAmt, setCashBoxAmt] = useState(123000);
  // const [isFinished, setIsFinished] = useState(0);

  // 시연용
  let isFinished = 0
  const cashBoxId = location.state.cashBoxId;
  if (cashBoxId == 0 || cashBoxId == 1){
    isFinished = 1;
  }
  // 시연용


  function onClickHandlerToMakeMemory() {
    navigate("/make-memory");
  }

  function onClickHanlderToAlbum() {
    navigate("/memories/album", {state: {cashBoxId: cashBoxId}});
  }

  const ongoinDummyData = [
    {
      memoryId: 1,
      title: "민조 아랫니",
      depositAmout: 50000,
      createAt: "2023-12-04",
      images: [Image],
    },
    {
      memoryId: 2,
      title: "민조 아랫니",
      depositAmout: 30000,
      createAt: "2023-11-28",
      images: [Image],
    },
    {
      memoryId: 3,
      title: "민조 아랫니",
      depositAmout: 99900,
      createAt: "2023-11-28",
      images: [Image],
    },
    {
      memoryId: 4,
      title: "민조 아랫니",
      depositAmout: 1000,
      createAt: "2023-11-28",
      images: [Image],
    },
    {
      memoryId: 4,
      title: "민조 아랫니",
      depositAmout: 1000,
      createAt: "2023-11-28",
      images: [Image],
    },
  ];

  function floatingClickHandler(){
    navigate("/make-memory")
  }

  return (
    <div>
      <Navbar pageTitle={cashBoxTitle} />
      <div className="mx-2">
        <div className="cash-box-outline flex-col px-4 boder-b border-b-silver">
          {!isFinished && <div className="text-sm pb-0.5">{savingsType}</div>}
          <div className="font-display text-md font-bold">{cashBoxTitle}</div>
          <div className="text-xs">
            {!!isFinished && <span className="text-grey pr-2">입금 계좌</span>}
            <span className="text-font1">{cashBoxAcno}</span>
          </div>
          <div
            className={`space-x-1 float-right pb-2 ${!!isFinished && "pt-4"}`}
          >
            <span className="text-md">총</span>
            <span
              className={`text-md font-bold ${
                !isFinished ? "text-blue" : "text-yellow"
              } `}
            >
              {cashBoxAmt.toLocaleString("ko-KR")}
            </span>
            <span className="text-md">원</span>
          </div>
        </div>
        <hr className="w-full bg-grey h-px border-none" />
        <div className="cash-box-memories">
          <MemoryList memoryContents={ongoinDummyData} />
        </div>
      </div>
      {!isFinished && (
        <FloatingBtn type="write" clickFunc={onClickHandlerToMakeMemory} />
      )}
      {!!isFinished && (
        <FloatingBtn type="album" clickFunc={onClickHanlderToAlbum} />
      )}
    </div>
  );
}
