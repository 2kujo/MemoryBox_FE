import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LongBtn from "@/components/common/LongBtn.jsx";
import "@/components/css/AnivPop.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { setCookie } from "@/api/Cookies"

export default function AnivPop(props) {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(1);
  function closePop() {
    setOpen(0);
    // setCookie(`${props.cashBoxId}-popShowed`, 1);
    setCookie(`popShowed`, 1);
  }
  function viewCashBox(id){
    navigate("/memories", { state: { cashBoxId: id }});
  }
  return (
    <div
      id="anniversary-pop"
      className={`w-screen h-screen ${isOpen ? "" : "closed"}`}
    >
      <div className="bg-dim w-screen h-screen absolute left-0 top-0 z-40"></div>
      <div className="bg-white w-screen h-screen py-24 text-left absolute left-0 z-50 bottom-to-top-pop text-sm">
        <button
          onClick={closePop}
          className="inline-block w-10 h-10 pl-2 bg-yellow rounded-full absolute right-4 top-4 close-pop-btn"
        >
          <XMarkIcon className="h-6 w-6 text-[#ffffff]" />
        </button>
        <div className="px-10">
            <div className="text-md">
            <span className="font-bold">{props.cashBoxTitle}</span>{" "}
            {props.cashBoxDuration}일째
            </div>
            <div className="text-md mb-[35px]">그동안 추억을 되돌아보세요~</div>
        </div>
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
            <LongBtn text="보러가기" clickFunc={() => viewCashBox(props.cashBoxId)}/>
        </div>
      </div>
  </div>
  );
}