import { useState } from "react";

export default function Tab(props) {
  const tabList = props.tabList;
  const [tabIdx, setTabIdx] = useState(0);

  function onTabClicked(idx) {
    setTabIdx(idx);
  }

  return (
    <div>
      <div className="mb-6 flex justify-stretch">
        {tabList.map((tab, idx, array) => {
          return (
            <div
              key={idx}
              className={
                idx === tabIdx
                  ? "text-center text-md font-text border-y-4 border-transparent border-b-yellow py-2 grow"
                  : "text-center text-md font-text border-y-4 border-transparent border-b-silver border-b-[1px] py-2 grow"
              }
              onClick={() => onTabClicked(idx)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      {tabList[tabIdx].contents}
    </div>
  );
}
