import { useState } from "react";
import Img01 from "@/assets/images/popup_img_01.jpeg";
import Img02 from "@/assets/images/popup_img_02.jpeg";
import Img03 from "@/assets/images/popup_img_03.jpeg";
import Img04 from "@/assets/images/popup_img_04.jpeg";
import Img05 from "@/assets/images/popup_img_05.jpeg";
import Img06 from "@/assets/images/popup_img_06.jpeg";
import Img07 from "@/assets/images/popup_img_07.jpeg";
import Img08 from "@/assets/images/popup_img_08.jpeg";
import Img09 from "@/assets/images/popup_img_09.jpeg";
import Img10 from "@/assets/images/popup_img_10.jpeg";
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
          <img src={Img01} alt="" />
          <img src={Img02} alt="" />
          <img src={Img03} alt="" />
          <img src={Img04} alt="" />
          <img src={Img05} alt="" />
          <img src={Img06} alt="" />
          <img src={Img07} alt="" />
          <img src={Img08} alt="" />
          <img src={Img09} alt="" />
          <img src={Img10} alt="" />
        </div>
        <LongBtn text="보러가기" clickFunc={props.memoriesUrl} />
      </div>
    </div>
  );
}
