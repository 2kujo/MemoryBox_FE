import { useNavigate, useLocation } from "react-router-dom";

import IntroBibi from "@/assets/images/intro_bibi.png";
import IntroFinishBibi from "@/assets/images/intro_finish_bibi.gif";
import IntroLogo from "@/assets/images/intro_logo.jpg";

import LongBtn from "@/components/common/LongBtn.jsx";
import { getCookie, setCookie } from "@/api/Cookies";
import { getCert } from "@/api/cert";

export default function Intro() {
  const location = useLocation();
  const navigate = useNavigate();
  const needPop = true;
  let userId;

  if (location.pathname == "/") {
    document.body.style.backgroundColor = "#FFDA48";
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
  }

  function startIntro() {
    getCert(onSuccess);
  }

  function onSuccess(data) {
    setCookie("memorybox-user-id", data.data.userId);
    navigate("/main");
  }

  function endIntro() {
    navigate("/main");
  }

  if (location.pathname == "/") {
    return (
      <>
        <div className="flex w-full h-full justify-center items-center pt-10">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full px-4">
              <div className="text-3xl font-display mb-1">KB 추억 저금통</div>
              <div className="text-grey text-sm">
                아이에게 특별한 선물을 하고싶다면
                <br />
                추억을 저금하세요
              </div>
            </div>
            <div className="mt-10 mb-20 w-64 text-center">
              <img
                className="mx-w-[22rem] mb-[10px]"
                src={IntroBibi}
                alt="추억 저금통에 추억을 저금하고 있는 키키"
              />
              <img
                className="inline"
                src={IntroLogo}
                alt="추억 저금통에 추억을 저금하고 있는 키키"
              />
            </div>
            <LongBtn type="white" text="시작하기" clickFunc={startIntro} />
          </div>
        </div>
      </>
    );
  } else if (location.pathname == "/intro-finish") {
    return (
      <>
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="text-[2rem] text-center font-display mb-1">
              추억 저금통 생성 완료!
            </div>
            <div className="text-grey text-md text-center">
              KB와 함께 추억을 저금해보세요
            </div>
            <div className="mt-10 mb-20 w-64">
              <img className="mx-auto" src={IntroFinishBibi} alt="" />
            </div>
            <LongBtn text="추억 저금하기" clickFunc={endIntro} />
          </div>
        </div>
      </>
    );
  }
}
