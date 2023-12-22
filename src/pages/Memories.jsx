import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import MemoryList from "@/components/common/MemoryList";
import FloatingBtn from "@/components/common/FloatingBtn";

import Image from "@/assets/images/first_tooth.png";
import { requestMemories } from "@/api/memory";
import { getCashBox } from "@/api/cashBox";

export default function Memories() {
  const navigate = useNavigate();
  const location = useLocation();
  const [memoryList, setMemoryList] = useState([]);
  const [cashBoxInfo, setCashBoxInfo] = useState({
    cashBoxId: 0,
    name: "",
    accountNum: 0,
    productName: "",
    balance: 0,
    finished: false,
  });
  // const [isFinished, setIsFinished] = useState(0);

  // 시연용
  // let isFinished = 0
  // const cashBoxId = location.state.cashBoxId;
  // if (cashBoxId == 0 || cashBoxId == 1){
  //   isFinished = 1;
  // }
  // 시연용

  const cashBoxId = location.state.cashBoxId;
  console.log(cashBoxId);

  useEffect(() => {
    requestMemories(cashBoxId, reqMemorySuccess, reqMemoryFailure);
    getCashBox(cashBoxId, getCashBoxSuccess, getCashBoxFailure);
  }, []);

  function reqMemorySuccess(res) {
    const memories = res.data.memoryList;
    console.log(memories);
    setMemoryList(memories);
  }

  function reqMemoryFailure(err) {
    console.log(err);
  }

  function getCashBoxSuccess(res) {
    console.log(res.data);
    setCashBoxInfo(res.data);

    console.log(cashBoxInfo);
  }

  function getCashBoxFailure(err) {
    console.log(err);
  }

  function onClickHandlerToMakeMemory() {
    navigate("/make-memory", { state: { cashBoxId: cashBoxId } });
  }

  function onClickHanlderToAlbum() {
    navigate("/memories/album", { state: { cashBoxId: cashBoxId } });
  }

  return (
    <div>
      <Navbar pageTitle={cashBoxInfo.name} path="/main"/>
      <div className="mx-2">
        <div className="cash-box-outline flex-col px-4 boder-b border-b-silver">
          {!cashBoxInfo.finished && (
            <div className="text-sm pb-0.5">{cashBoxInfo.productName}</div>
          )}
          <div className="font-display text-md font-bold">
            {cashBoxInfo.name}
          </div>
          <div className="text-xs">
            {!!cashBoxInfo.finished && (
              <span className="text-grey pr-2">입금 계좌</span>
            )}
            <span className="text-font1">{cashBoxInfo.accountNum}</span>
          </div>
          <div
            className={`space-x-1 float-right pb-2 ${
              !!cashBoxInfo.finished && "pt-4"
            }`}
          >
            <span className="text-md">총</span>
            <span
              className={`text-md font-bold ${
                !cashBoxInfo.finished ? "text-blue" : "text-yellow"
              } `}
            >
              {cashBoxInfo.balance.toLocaleString("ko-KR")}
            </span>
            <span className="text-md">원</span>
          </div>
        </div>
        <hr className="w-full bg-grey h-px border-none" />
        <div className="cash-box-memories">
          <MemoryList
            memoryContents={memoryList}
            cashBoxId={cashBoxId}
            cashBoxName={cashBoxInfo.name}
          />
        </div>
      </div>
      {!cashBoxInfo.finished && (
        <FloatingBtn type="write" clickFunc={onClickHandlerToMakeMemory} />
      )}
      {!!cashBoxInfo.finished && (
        <FloatingBtn type="album" clickFunc={onClickHanlderToAlbum} />
      )}
    </div>
  );
}
