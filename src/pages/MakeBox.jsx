import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/common/Navbar.jsx";
import Step from "@/components/common/Step.jsx";
import LongBtn from "@/components/common/LongBtn.jsx";

export default function MakeBox() {
  const navigate = useNavigate();
  const [cashboxName, setCashboxName] = useState("");
  const [cashboxDesc, setCashboxDesc] = useState("");
  const [cashboxProduct, setCashboxProduct] = useState("");
  const [currProduct, setCurrProduct] = useState(null);
  const [step, setStep] = useState(0);
  const totalStep = 3;
  const productList = [
    { key: 0, title: "KB 특별한 적금", duration: 36, min: 3, max: 3.5 },
    { key: 1, title: "KB내맘대로적금", duration: 36, min: 3.15, max: 3.75 },
    { key: 2, title: "KB우리아이행복적금", duration: 24, min: 3.2, max: 3.55 },
    { key: 3, title: "KB상호부금", duration: 36, min: 3.15, max: 3.55 },
  ];

  function nextStep() {
    setStep(step + 1);
  }

  const handleCashboxNameChange = (event) => {
    setCashboxName(event.target.value);
  };
  const handleCashboxDescChange = (event) => {
    setCashboxDesc(event.target.value);
  };

  function selectCashboxProduct(idx, productName) {
    setCurrProduct(idx);
    setCashboxProduct(productName);
  }

  function makeCashbox() {
    // name, desc, productType 사용해 api 통신 수행
    navigate("/intro-finish");
  }

  if (step == 0) {
    // 저금통 이름 입력
    return (
      <div className="w-full h-full">
        <Navbar />
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step} />
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-1 text-md ">저금통 이름은 무엇인가요?</div>
              <div className="mb-5 text-xs text-grey ">최대 20자</div>
              <div className="w-full">
                <input
                  type="text"
                  value={cashboxName}
                  onChange={handleCashboxNameChange}
                  maxLength="20"
                  className="border-b-[1px] w-full py-2 outline-none text-md "
                />
              </div>
            </div>
            <div className="mb-16">
              <LongBtn text="다음" clickFunc={nextStep} />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (step == 1) {
    // 저금통 설명 입력
    return (
      <div className="w-full h-full">
        <Navbar />
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step} />
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-1 text-md ">무엇을 위한 저금통인가요?</div>
              <div className="mb-5 text-xs text-grey ">최대 20자</div>
              <div className="w-full">
                <input
                  type="text"
                  value={cashboxDesc}
                  onChange={handleCashboxDescChange}
                  maxLength="20"
                  className="border-b-[1px] w-full py-2 outline-none text-md "
                />
              </div>
            </div>
            <div className="mb-16">
              <LongBtn text="다음" clickFunc={nextStep} />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (step == 2) {
    return (
      <div className="w-full h-full">
        <Navbar />
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step} />
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-5 text-md ">연결할 상품을 선택해주세요</div>
              <div className="mb-[-0.75rem]">
                {productList.map((product, idx, array) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => selectCashboxProduct(idx, product.title)}
                      className={
                        idx === currProduct
                          ? "border-2 border-blue mb-3 shadow-md rounded-sm bg-[#f3f3f3] px-5 py-3"
                          : "border-2 border-transparent mb-3 shadow-md rounded-sm bg-[#f3f3f3] px-5 py-3"
                      }
                    >
                      <div className=" text-sm mb-2">{product.title}</div>
                      <div className=" text-right">
                        <span className="text-xs text-grey">
                          {product.duration}개월 기준,{" "}
                        </span>
                        <span className="text-xs text-blue font-semibold">
                          {product.min}%~{product.max}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-16">
              <LongBtn text="다음" clickFunc={makeCashbox} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
