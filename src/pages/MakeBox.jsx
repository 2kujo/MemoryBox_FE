import React from "react";
import { useState } from "react";
import Navbar from "@/components/common/Navbar.jsx"
import LongBtn from "@/components/common/LongBtn.jsx"

export default function MakeBox() {
  const [cashboxName, setCashboxName] = useState('');
  const [cashboxDesc, setCashboxDesc] = useState('');
  const [cashboxPdType, setCashboxPdType] = useState('');
  const [step, setStep] = useState(0);
  
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
    nextStep();
  }

  if(step == 0){
    // 저금통 이름 입력
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="mt-4 flex w-full h-full flex-col justify-between">
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
    );
  }else if(step == 1){
    // 저금통 설명 입력
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="mt-4 flex w-full h-full flex-col justify-between">
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
    );
  }else if(step == 2){
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="mt-4 flex w-full h-full flex-col justify-between">
          <div>
            <div className="mb-1 text-xl font-text">연결할 상품을 선택해주세요</div>
          </div>
          <div className="mb-16">
            <LongBtn text="다음" clickFunc={getCashboxPdType}/>
          </div>
        </div>
      </div>
    );
  }
}
