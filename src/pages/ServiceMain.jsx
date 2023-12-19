import React from "react";
import { useEffect } from "react";
import Navbar from "@/components/common/Navbar.jsx"
import Tab from '@/components/common/Tab.jsx'
import FloatingBtn from '@/components/common/FloatingBtn.jsx'

export default function ServiceMain() {
  const tabList = [
    {key: 0, title: '저금중', contents: ''},
    {key: 1, title: '저금 완료', contents: ''}
  ];

  useEffect(() => {
    // 저금중 저금통 목록
    tabList[0].contents = 
      <div>
        <div className="mb-[-0.75rem]">
          <div className="mb-3 shadow-md rounded-sm bg-[rgba(255,199,0,0.3)] p-5">
            <div className="font-text text-md">우리 민조</div>
            <div className="font-text text-xs text-grey">2000.05.31 - 2000.05.31</div>
            <div className="font-text font-medium text-md text-right">200,000원</div>
          </div>
          <div className="mb-3 shadow-md rounded-sm bg-[rgba(255,199,0,0.3)] p-5">
            <div className="font-text text-md">우리 민조</div>
            <div className="font-text text-xs text-grey">2000.05.31 - 2000.05.31</div>
            <div className="font-text font-medium text-md text-right">200,000원</div>
          </div>
        </div>
        <FloatingBtn type="add"/>
      </div>
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar/>
      <div>
        <Tab tabList={tabList}/>
      </div>
    </div>
  );
}
