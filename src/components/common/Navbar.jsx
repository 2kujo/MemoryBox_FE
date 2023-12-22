import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  function goBackHandler(){
    if('step' in props){
      if(props.step == 0){
        console.log('step is 0');
        navigate(-1);
      }else{
        console.log('step is ' + props.step);
        navigate(location.pathname, {state: {step: props.step - 1}, replace: true})
      }
    }else{
      navigate(-1);
    }
  }

  return (
    <div className="flex justify-between py-5 px-0.5 sticky bg-[#ffffff] top-0 font-display">
      <div className="flex gap-3 font-text font-medium">
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" onClick={goBackHandler}/>
        <span>{props.pageTitle}</span>
      </div>
      <div className="flex gap-3">
        <HomeIcon className="h-6 w-6 text-gray-500" />
        <Bars3Icon className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  );
}
