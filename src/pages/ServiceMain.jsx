import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/common/Navbar.jsx";
import Tab from "@/components/common/Tab.jsx";
import FloatingBtn from "@/components/common/FloatingBtn.jsx";
import "@/pages/css/ServiceMain.css";

export default function ServiceMain() {
  const navigate = useNavigate();
  const tabList = [
    { key: 0, title: "저금중", contents: "" },
    { key: 1, title: "저금 완료", contents: "" },
  ];

  const finishedCashBoxList = [
    {
      cashBoxId: 0,
      name: "저금통 이름1",
      balance: 1200000,
      startDate: "2023-12-10",
      maturityDate: "2023-12-20",
      thumbnail: "/src/assets/images/first_tooth.png",
    },
    {
      cashBoxId: 1,
      name: "저금통 이름2",
      balance: 34500000,
      startDate: "2023-05-11",
      maturityDate: "2023-09-26",
      thumbnail: "/src/assets/images/intro_bibi.png",
    },
  ];

  function viewCashbox(id) {
    navigate("/memories", { state: { cashBoxId: id } });
  }

  function floatingClickHandler() {
    navigate("/make-box");
  }

  // 최초 저금통 목록 가져오기
  if (tabList[0].contents == "") {
    // 저금중 저금통 목록
    tabList[0].contents = (
      <div>
        <div className="mb-[-0.75rem]">
          <div
            onClick={() => viewCashbox(1)}
            className="need-to-read mb-3 shadow-md rounded-sm bg-[#ffeec2] p-5"
          >
            <div className="font-text text-md">우리 민조</div>
            <div className="font-text text-xs text-grey">
              2000.05.31 - 2000.05.31
            </div>
            <div className="font-text font-medium text-md text-right">
              200,000원
            </div>
          </div>
          <div
            onClick={() => viewCashbox()}
            className="mb-3 shadow-md rounded-sm bg-[#ffeec2] p-5"
          >
            <div className="font-text text-md">우리 민조</div>
            <div className="font-text text-xs text-grey">
              2000.05.31 - 2000.05.31
            </div>
            <div className="font-text font-medium text-md text-right">
              200,000원
            </div>
          </div>
        </div>
        <FloatingBtn type="add" clickFunc={floatingClickHandler} />
      </div>
    );
  }

  // 저금 완료 목록 가져오기
  if (tabList[1].contents === "") {
    tabList[1].contents = (
      <div className="flex-col space-y-5 font-text">
        {finishedCashBoxList.map((cashbox) => (
          <div key={cashbox.cashBoxId} className="relative h-44">
            <img
              src="/src/assets/images/bg_check.jpeg"
              alt="저금완료 저금통 배경 이미지"
              className="object-cover shadow-md absolute top-0 left-0 z-0"
            />
            <div className="flex justify-center relative pt-1 pb-4">
              <span className="text-font1 text-sm">자기앞추억</span>
            </div>
            <div className="flex justify-center gap-3 relative">
              <div className="">
                <div className="bg-yellow w-20 h-20 rounded-full flex justify-center items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={cashbox.thumbnail}
                      alt={`${cashbox.name}의 대표사진 입니다`}
                      className="w-full h-full m-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex-col">
                  <div className="font-display">{cashbox.name}</div>
                  <div className="">
                    <span className="text-grey text-[0.7rem]">
                      {cashbox.startDate} ~ {cashbox.maturityDate}
                    </span>
                  </div>
                  <div>
                    <span className="pr-2 text-xs">추억으로 모은 돈</span>
                    <span className="text-yellow font-bold text-sm drop-shadow-sm pr-1">
                      {cashbox.balance.toLocaleString("ko-KR")}
                    </span>
                    <span className="text-xs">원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Navbar pageTitle="추억 저금통" />
      <div>
        <Tab tabList={tabList} />
      </div>
    </div>
  );
}
