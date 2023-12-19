import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/common/Navbar.jsx"
import Step from "@/components/common/Step.jsx"
import LongBtn from "@/components/common/LongBtn.jsx"

export default function MakeBox() {
  const navigate = useNavigate();
  const [cashboxName, setCashboxName] = useState('');
  const [cashboxDesc, setCashboxDesc] = useState('');
  const [cashboxPdType, setCashboxPdType] = useState('');
  const [step, setStep] = useState(2);
  const totalStep = 3;
  
  function nextStep(){
    setStep(step+1);
  }

  const handleCashboxNameChange = (event) => {
    setCashboxName(event.target.value);
  };
  const handleCashboxDescChange = (event) => {
    setCashboxDesc(event.target.value);
  };
  function getCashboxPdType(){
    // name, desc, productType 사용해 api 통신 수행
    
    navigate("/intro-finish")
  }

  if(step == 0){
    // 저금통 이름 입력
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step}/>
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-1 text-xl font-text">저금통 이름은 무엇인가요?</div>
              <div className="mb-2 text-sm text-grey font-text">최대 20자</div>
              <div className="w-full">
                  <input type="text" value={cashboxName} onChange={handleCashboxNameChange} maxLength="20" className="border-b-[1px] w-full py-2 outline-none text-md font-text"/>
              </div>
            </div>
            <div className="mb-16">
              <LongBtn text="다음" clickFunc={nextStep}/>
            </div>
          </div>
        </div>
      </div>
    );
  }else if(step == 1){
    // 저금통 설명 입력
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step}/>
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-1 text-xl font-text">무엇을 위한 저금통인가요?</div>
              <div className="mb-2 text-sm text-grey font-text">최대 20자</div>
              <div className="w-full">
                  <input type="text" value={cashboxDesc} onChange={handleCashboxDescChange} maxLength="20" className="border-b-[1px] w-full py-2 outline-none text-md font-text"/>
              </div>
            </div>
            <div className="mb-16">
              <LongBtn text="다음" clickFunc={nextStep}/>
            </div>
          </div>
        </div>
      </div>
    );
  }else if(step == 2){
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step}/>
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-1 text-xl font-text">연결할 상품을 선택해주세요</div>
              <div>
                <div className="rounded-sm bg-[rgba(255,199,0,0.3)] p-8">
                  <div className="font-text text-md">우리 민조</div>
                  <div className="font-text text-xs text-grey">2000.05.31 - 2000.05.31</div>
                  <div className="font-text text-md text-right">200,000원</div>
                </div>
              </div>
            </div>
            <div className="mb-16">
              <LongBtn text="다음" clickFunc={getCashboxPdType}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
