import { useNavigate, useLocation } from "react-router-dom";
import IntroBibi from '@/assets/images/intro_bibi.png'
import LongBtn from '@/components/common/LongBtn.jsx'
import FloatingBtn from '@/components/common/FloatingBtn.jsx'
import Tab from '@/components/common/Tab.jsx'
import AnivPop from '@/components/AnivPop.jsx'

export default function Intro(){
  const location = useLocation();
  const navigate = useNavigate();
  const needPop = true;
  const tabList = [
      {key: 0, title: '저금중', contents: <div className="0"></div>},
      {key: 1, title: '저금 완료', contents: <div className="1"></div>}
  ];
  function startIntro(){
    //cert를 통해 유저 판별
    navigate("/make-box")
  }
  function endIntro(){
    navigate("/main")
  }
  if(location.pathname == "/"){
    return (
      <>
      {/* <Tab tabList={tabList}/> */}
      <div className="flex w-full h-full justify-center items-center">
          <div className="w-full">
            <div className="text-4xl text-center font-display mb-1">KB 추억 저금통</div>
            <div className="text-grey text-xl text-center font-text">추억을 저금하세요</div>
            <div className="mt-10 mb-20">
                <img className="mx-auto" src={IntroBibi} alt="" />
            </div>
            <LongBtn text="시작하기" clickFunc={startIntro}/>
          </div>
      </div>
      <AnivPop memoriesTitle="우리 민조" memoriesDuration="100"/>
      </>
  )
  }else if(location.pathname == "/intro-finish"){
    return (
      <>
      <div className="flex w-full h-full justify-center items-center">
          <div className="w-full">
            <div className="text-3xl text-center font-display mb-1">추억 저금통 준비 완료!</div>
            <div className="text-grey text-xl text-center font-text">KB와 함께 추억을 저금해보세요</div>
            <div className="mt-10 mb-20">
                <img className="mx-auto" src={IntroBibi} alt="" />
            </div>
            <LongBtn text="시작하기" clickFunc={endIntro}/>
          </div>
      </div>
      </>
  )
  }
}