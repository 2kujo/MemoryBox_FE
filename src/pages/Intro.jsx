import { useNavigate, useLocation } from "react-router-dom";

import IntroBibi from '@/assets/images/intro_bibi.png'
import IntroFinishBibi from '@/assets/images/intro_finish_bibi.gif'
import LongBtn from '@/components/common/LongBtn.jsx'
import AnivPop from '@/components/AnivPop.jsx'

export default function Intro() {
  const location = useLocation();
  const navigate = useNavigate();
  const needPop = true;

  function startIntro() {
    //cert를 통해 유저 판별
    navigate("/make-box");
  }
  function endIntro() {
    navigate("/main");
  }
  if (location.pathname == "/") {
    return (
      <>
        <div className="flex w-full h-full justify-center items-center pt-10">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="text-3xl text-center font-display mb-1">
              KB 추억 저금통
            </div>
            <div className="text-grey text-md text-center">
              추억을 저금하세요
            </div>
            <div className="mt-10 mb-20 w-64">
              <img
                className="mx-auto"
                src={IntroBibi}
                alt="추억 저금통에 추억을 저금하고 있는 키키"
              />
            </div>
            <LongBtn text="시작하기" clickFunc={startIntro} />
          </div>
        </div>
        <AnivPop memoriesTitle="우리 민조" memoriesDuration="100" />
      </>
    );
  } else if (location.pathname == "/intro-finish") {
    return (
      <>
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="text-[2rem] text-center font-display mb-1">
              추억 저금통 준비 완료!
            </div>
            <div className="text-grey text-md text-center">
              KB와 함께 추억을 저금해보세요
            </div>
            <div className="mt-10 mb-20 w-64">
              <img className="mx-auto" src={IntroBibi} alt="" />
            </div>
            <LongBtn text="추억 저금하기" clickFunc={endIntro} />
          </div>
        </div>
      </>
    );
  }
}
