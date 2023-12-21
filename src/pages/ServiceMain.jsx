import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/common/Navbar.jsx";
import Tab from "@/components/common/Tab.jsx";
import FloatingBtn from "@/components/common/FloatingBtn.jsx";
import AnivPop from "@/components/AnivPop.jsx";
import "@/pages/css/ServiceMain.css";

// 시연용
import CheckBg from "@/assets/images/bg_check.jpeg";
import Image1 from "@/assets/images/first_tooth.png";
import Image2 from "@/assets/images/intro_bibi.png";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const getCookie = (name) => {
  return cookies.get(name);
};
// 시연용

export default function ServiceMain() {
  const navigate = useNavigate();

  // 시연용
  const popShowed = getCookie("2-popShowed");
  // 시연용

  const tabList = [
    { key: 0, title: "저금중", contents: "" },
    { key: 1, title: "저금 완료", contents: "" },
  ];

  const ingCashBoxList = [
    {
      cashBoxId: 2,
      name: "민조 유치원",
      balance: "750,000",
      startDate: "2023.12.10",
      maturityDate: "2024.12.20",
    },
    {
      cashBoxId: 3,
      name: "진아 초등학교 입학",
      balance: "1,200,000",
      startDate: "2022.02.01",
      maturityDate: "2024.02.01",
    },
  ];

  const finishedCashBoxList = [
    {
      cashBoxId: 0,
      name: "민조야 어서와",
      balance: "12,400,000",
      startDate: "2020.05.31",
      maturityDate: "2023.05.31",
      thumbnail: Image1,
      maturityChecked: false,
    },
    {
      cashBoxId: 1,
      name: "진아 유치원 입학",
      balance: "34,500,000",
      startDate: "2020.01.31",
      maturityDate: "2022.01.31",
      thumbnail: Image2,
      maturityChecked: true,
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
          {ingCashBoxList.map((cashbox) => (
            <div
              onClick={() => viewCashbox(1)}
              className="mb-3 shadow-md rounded-sm bg-[#ffeec2] p-5"
            >
              <div className="font-text text-[1.1rem]">{cashbox.name}</div>
              <div className="font-text text-xs text-grey">
                {cashbox.startDate} ~ {cashbox.maturityDate} (만기 예정)
              </div>
              <div className="font-text font-medium text-sm text-right">
                <span className="font-bold">{cashbox.balance}</span>
                <span className="pl-0.5">원</span>
              </div>
            </div>
          ))}
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
          <div
            key={cashbox.cashBoxId}
            className={`${
              cashbox.maturityChecked == false ? "need-to-read " : ""
            }relative`}
            onClick={() => viewCashbox(cashbox.cashBoxId)}
          >
            <img
              src={CheckBg}
              alt="저금완료 저금통 배경 이미지"
              className="object-cover shadow-md z-0"
            />
            <div className="absolute left-0 top-0 w-full h-full">
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
      {!popShowed && (
        <AnivPop
          cashBoxTitle="민조 유치원"
          cashBoxDuration="100"
          cashBoxId="2"
        />
      )}
    </div>
  );
}
