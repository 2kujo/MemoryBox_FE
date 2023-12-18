import React, { useState } from "react";

import Navbar from "@/components/common/Navbar";

export default function Memories() {
  const [cashBoxTitle, setCashBoxTitle] = useState("우리 민조");
  const [savingsType, setSavingsType] = useState("KB 특★별한 우리아이 적금");
  const [cashBoxAcno, setCashBoxAcno] = useState("640406-14-120472");
  const [cashBoxAmt, setCashBoxAmt] = useState(123000);

  const dummyData = [
    {
      memoryId: 1,
      title: "민조 아랫니",
      depositAmout: 50000,
      createAt: "2023-12-04",
      images: ["/src/assets/first_tooth.png"],
    },
    {
      memoryId: 2,
      title: "민조 아랫니",
      depositAmout: 30000,
      createAt: "2023-11-28",
      images: ["/src/assets/first_tooth.png"],
    },
    {
      memoryId: 3,
      title: "민조 아랫니",
      depositAmout: 99900,
      createAt: "2023-11-28",
      images: ["/src/assets/first_tooth.png"],
    },
    {
      memoryId: 4,
      title: "민조 아랫니",
      depositAmout: 1000,
      createAt: "2023-11-28",
      images: ["/src/assets/first_tooth.png"],
    },
  ];

  return (
    <div>
      <Navbar pageTitle={cashBoxTitle} />
      <div className="mx-2">
        <div className="cash-box-outline flex-col px-5 boder-b border-b-silver">
          <div className="text-sm pb-0.5">{savingsType}</div>
          <div className="text-md font-bold">{cashBoxTitle}</div>
          <div className="text-xs text-grey">{cashBoxAcno}</div>
          <div className="space-x-1 float-right pb-2">
            <span className="text-md">총</span>
            <span className="text-md font-bold text-blue">
              {cashBoxAmt.toLocaleString("ko-KR")}
            </span>
            <span className="text-md">원</span>
          </div>
          <hr className="w-full bg-silver h-px border-none" />
        </div>
        <div className="cash-box-memories">
          {dummyData.map((memory, memoryId) => (
            <div
              key={memoryId}
              className="cash-box-memory px-3 py-3 flex justify-between items-center border-b border-b-silver"
            >
              <div className="memory-text">
                <div className="text-sm">{memory.title}</div>
                <div className="text-xs text-grey">{memory.createAt}</div>
                <div className="text-sm pt-3">
                  <span className="text-blue font-bold">
                    {memory.depositAmout.toLocaleString("ko-KR")}
                  </span>
                  <span>원</span>
                </div>
              </div>
              <img
                className="w-20 h-20 rounded-sm"
                src={memory.images[0]}
                alt={`${memory.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
