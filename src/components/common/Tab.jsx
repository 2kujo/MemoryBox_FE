import { useState } from "react";

export default function Tab(props){
    const tabList = props.tabList;
    const [tabIdx, setTabIdx] = useState(0);

    function onTabClicked(idx){
        setTabIdx(idx);
        console.log(idx);
    }

    return(
        <div>
            <div className="border-b-2 border-grey flex justify-stretch">
                {tabList.map((tab, idx, array) => {
                return (
                    <div key={idx} className={idx === tabIdx ? "text-xl font-text border-y-4 border-transparent border-b-yellow py-2 grow" : "text-xl font-text border-y-4 border-transparent py-2 grow"} onClick={() => onTabClicked(idx)}>{tab.title}</div>
                );
                })}
            </div>
            {tabList[tabIdx].contents}
        </div>
    )
}