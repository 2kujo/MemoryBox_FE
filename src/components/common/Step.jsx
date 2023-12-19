import { useState } from "react";

export default function Step(props){
    const totalStep = props.totalStep;
    const currStep = props.currStep;

    let stepArr = [];
    for(let i=0; i<totalStep; i++){
        stepArr.push(<div key={i} className={i <= currStep ? "w-full border-b-2 border-yellow" : "w-full border-b-2 border-grey"}></div>);
    }

    return (
        <div>
            <div className="mb-2 w-full flex justify-stretch items-stretch">
                {stepArr}
            </div>
            <div className="text-xs text-right text-grey">{currStep+1}/{totalStep}</div>
        </div>
    )
}