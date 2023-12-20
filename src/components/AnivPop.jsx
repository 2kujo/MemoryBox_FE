import { useState } from "react";
import LongBtn from "@/components/common/LongBtn.jsx";
import "@/components/css/AnivPop.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AnivPop(props) {
  const [isOpen, setOpen] = useState(1);
  function closePop() {
    setOpen(0);
  }
  return (
    <div
      id="anniversary-pop"
      className={`w-screen h-screen ${isOpen ? "" : "closed"}`}
    >
      <div className="bg-dim w-screen h-screen absolute left-0 top-0 z-40"></div>
      <div className="bg-white w-screen h-screen px-10 py-24 text-left absolute left-0 z-50 bottom-to-top-pop text-sm">
        <button
          onClick={closePop}
          className="inline-block w-10 h-10 pl-2 bg-yellow rounded-full absolute right-4 top-4 close-pop-btn"
        >
          <XMarkIcon className="h-6 w-6 text-[#ffffff]" />
        </button>
        <div className="text-md">
          <span className="font-bold">{props.memoriesTitle}</span>{" "}
          {props.memoriesDuration}일째
        </div>
        <div className="text-md mb-[35px]">그동안 추억을 되돌아보세요~</div>
        <div className="image-con relative overflow-hidden h-4/6 mb-[50px]">
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>
            <div className="img-box"></div>

        </div>
        <div className="px-10">
            <LongBtn text="보러가기" clickFunc={props.memoriesUrl}/>
        </div>
      </div>
  </div>
  );
}