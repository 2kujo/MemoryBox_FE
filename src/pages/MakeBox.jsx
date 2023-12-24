import { React, useEffect } from "react";
import { useState, KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/common/Navbar.jsx";
import Step from "@/components/common/Step.jsx";
import LongBtn from "@/components/common/LongBtn.jsx";

import Icon1 from "@/assets/images/life_icon1.png";
import Icon2 from "@/assets/images/life_icon2.png";
import Icon3 from "@/assets/images/life_icon3.png";
import Icon4 from "@/assets/images/life_icon4.png";
import Icon5 from "@/assets/images/life_icon5.png";

import { createCashBox } from "@/api/cashBox";

export default function MakeBox() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cashboxName, setCashboxName] = useState("");
  const [cashboxDesc, setCashboxDesc] = useState("");
  // const [cashboxProduct, setCashboxProduct] = useState("");
  const [lifeCycleName, setlifeCycleName] = useState("");
  const cashboxProduct = "특★한 적금"
  const [currLife, setCurrLife] = useState(null);
  const [step, setStep] = useState(0);
  const totalStep = 3;
  const lifeList = [
    { key: 0, title: "영아기", duration: 24, icon: Icon1 },
    { key: 1, title: "유치원", duration: 24, icon: Icon2 },
    { key: 2, title: "초등학교", duration: 72, icon: Icon3 },
    { key: 2, title: "중학교", duration: 36, icon: Icon4 },
    { key: 2, title: "고등학교", duration: 36, icon: Icon5 },
  ];
  const invalidTxt = {
    0: "저금통 이름은",
    1: "저금통 설명은",
    2: "성장 과정은",
  };

  useEffect(() => {
    if ("state" in location && location.state != null) {
      if ("step" in location.state) {
        setStep(location.state.step);
        delete location.state.step;
      }
    }
  });

  function nextStep() {
    if (isNextStepPossible()) {
      // delete location.state.step
      setStep(step + 1);
    } else {
      toast(invalidTxt[step] + " 필수 입력값입니다");
    }
  }

  function isNextStepPossible() {
    if (step == 0 && cashboxName == "") {
      return false;
    } else if (step == 1 && cashboxDesc == "") {
      return false;
    } else if (step == 2 && cashboxProduct == "") {
      return false;
    } else return true;
  }

  const validVal = {
    0: "저금통 이름은",
    1: "저금통 용도는",
    2: "연결할 상품은",
  };

  function nextStep() {
    if (isValidNextStep()) {
      setStep(step + 1);
    } else {
      toast(validVal[step] + " 반드시 입력해야 합니다.");
    }
  }

  // 스텝 이동에 대한 입력값 valid check
  function isValidNextStep() {
    if (step == 0 && cashboxName == "") {
      return false;
    } else if (step == 1 && cashboxDesc == "") {
      return false;
    } else if (step == 2 && cashboxProduct == "") {
      return false;
    }
    return true;
  }

  // input에서 엔터 입력 시 키패드 내려주기 위한 함수
  const keyDownHandler = (event) => {
    if (event.code == "Enter" || event.code == "enter" || event.keyCode == 13) {
      event.target.blur();
    }
  };

  // 저금통 이름
  const handleCashboxNameChange = (event) => {
    setCashboxName(event.target.value);
  };

  // 저금통 용도
  const handleCashboxDescChange = (event) => {
    setCashboxDesc(event.target.value);
  };

  // 저금 시기(성장 과정)
  function selectCashboxLife(idx, name) {
    setCurrLife(idx);
    setlifeCycleName(name);
  }

  function makeCashbox() {
    if (isNextStepPossible()) {
      const data = {
        name: cashboxName + '-' + lifeCycleName,
        description: cashboxDesc,
        productName: cashboxProduct,
      };
      createCashBox(data, onSuccess, onFailure);
    } else {
      toast(invalidTxt[step] + " 필수 입력값입니다");
    }
  }

  function onSuccess(res) {
    navigate("/intro-finish");
    // navigate("/main");
  }

  function onFailure(err) {
    console.log(err);
    // console.log(err.response.data);
    // console.log(err.response.status);
    // console.log(err.response.headers);
  }

  if (step == 0) {
    // 저금통 이름 입력
    return (
      <div className="w-full h-full">
        <ToastContainer />
        <Navbar pageTitle="추억 저금통" path="/main"/>
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
                  onKeyDown={keyDownHandler}
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
        <ToastContainer />
        <Navbar pageTitle="추억 저금통" path="/make-box" propsObj={{state: {step: 0}, replace: true}}/>
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
                  onKeyDown={keyDownHandler}
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
        <ToastContainer />
        <Navbar pageTitle="추억 저금통" path="/make-box" propsObj={{state: {step: 1}, replace: true}}/>
        <div className="flex w-full h-full flex-col">
          <div className="grow-0 mb-4">
            <Step totalStep={totalStep} currStep={step} />
          </div>
          <div className="grow flex flex-col justify-between">
            <div>
              <div className="mb-5 text-md ">기록할 성장 과정을 선택해주세요</div>
              <div className="mb-[-0.75rem]">
                {lifeList.map((life, idx, array) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => selectCashboxLife(idx, life.title)}
                      className={
                        idx === currLife
                          ? "border-2 border-blue mb-3 shadow-md rounded-sm bg-[#f3f3f3] px-5 py-3 flex items-center"
                          : "border-2 border-transparent mb-3 shadow-md rounded-sm bg-[#f3f3f3] px-5 py-3 flex items-center"
                      }
                    >
                      <img className="w-[50px]" src={life.icon} alt="성장 과정 아이콘" />
                      <div className="font-display text-md mt-[5px] ml-[15px]">{life.title}</div>
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
