import Navbar from "@/components/common/Navbar";
import React, { useState, useRef } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import LongBtn from "@/components/common/LongBtn";
import Step from "@/components/common/Step";
import { useLocation } from "react-router-dom";
import { requestCreateMemory } from "@/api/memory";

export default function MakeMemory() {
  const [showImages, setShowImages] = useState([]);
  const [imageList, setImageList] = useState([]);

  const [memoryTitle, setMemoryTitle] = useState("");
  const [memoryDesc, setMemoryDesc] = useState("");
  const [depositAmount, setDepositAmount] = useState(0);
  const [changedDeposit, setChangedDeposit] = useState("");

  const [inputCount, setInputCount] = useState(0);
  const [step, setStep] = useState(0);
  const totalStep = 3;

  const location = useLocation();
  const cashBoxId = location.state.cashBoxId;
  console.log(cashBoxId);

  function nextStep() {
    setStep(step + 1);
  }
  //   이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imgLists = event.target.files;
    setImageList(imgLists);

    let imageUrlLists = [...showImages];

    for (let i = 0; i < imgLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imgLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    event.target.scrollLeft = 10000;
    // moveScroll();
  };

  function onChangeMemoryTitle(event) {
    const memoryTitle = event.target.value;
    setMemoryTitle(memoryTitle);
  }

  const onChangeMemoryDesc = (event) => {
    setInputCount(event.target.value.length);
    setMemoryDesc(event.target.value);
  };

  //금액 콤마 찍기
  const onChangeDepositAmount = (event) => {
    console.log(typeof event.target.value);
    let num = event.target.value.replaceAll(",", "");
    setDepositAmount(parseInt(num));
    setChangedDeposit(
      num.replaceAll(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const onKeyDownHandler = (event) => {
    if (event.code == "Enter" || event.code == "enter" || event.keyCode == 13) {
      event.target.blur();
    }
  };

  async function onSubmitMemory(event) {
    event.preventDefault();
    console.log(memoryTitle);
    console.log(memoryDesc);
    console.log(depositAmount);

    const imgList = new FormData();

    for (var i = 0; i < imageList.length; i++) {
      imgList.append("imageList", imageList[i]);
    }

    await requestCreateMemory(
      cashBoxId,
      memoryTitle,
      memoryDesc,
      depositAmount,
      imgList
    );
  }

  window.onpopstate = function (event) {
    console.log("sdsdsd");
    const state = { id: 1 };
    const url = "/make-box";

    history.pushState(state, "", url);
  };

  if (step == 0) {
    return (
      <div className="w-full h-full flex flex-col">
        <Navbar pageTitle={"추억 기록"} />
        <div className="grow-0">
          <Step totalStep={totalStep} currStep={step} />
        </div>
        <div className="w-full h-full">
          <div className="wrap w-full">
            <div className="scroll-wrap">
              {showImages.map((image, id) => (
                <div className="scroll-element rounded-sm" key={id}>
                  <img
                    className="w-full h-full m-auto object-cover"
                    src={image}
                    alt={`${image}-${id}`}
                  />
                </div>
              ))}
              <div className="scroll-element">
                <label htmlFor="gallery-input-file" onChange={handleAddImages}>
                  <input
                    type="file"
                    id="gallery-input-file"
                    multiple="multiple"
                    style={{ display: "none" }}
                  />
                  <div className="camera-box items-center flex justify-center">
                    <div>
                      <CameraIcon className="camera-icon h-10"></CameraIcon>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <hr className="hr1 mt-5" />
          <div className="memory-title-box h-10">
            <input
              className="w-full h-full focus:outline-none text-sm"
              type="text"
              id="memory_title"
              placeholder="제목을 입력하세요(선택사항)"
              autoComplete="off"
              onChange={onChangeMemoryTitle}
            ></input>
          </div>
          <hr className="hr1" />
          <div className="memory-content-box">
            <div className="my-5 h-52">
              <textarea
                className="w-full focus:outline-none h-full "
                type="text"
                id="memory_title"
                placeholder="내용을 작성해주세요"
                autoComplete="off"
                maxLength="200"
                onChange={onChangeMemoryDesc}
              ></textarea>
            </div>
            <div className="text-right text-grey text-xs mb-5">
              <span>{inputCount}</span>
              <span>/200</span>
            </div>
          </div>
          <div>
            <hr className="hr1 mb-5" />
          </div>

          <div className="flex flex-col justify-between">
            <div></div>
            <div>
              <LongBtn text="다음" clickFunc={nextStep} />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (step == 1) {
    return (
      <div className="w-full h-full flex flex-col">
        <Navbar pageTitle={"추억 기록"} />
        <div className="grow-0">
          <Step totalStep={totalStep} currStep={step} />
        </div>
        <div className="mt-4 flex w-full h-full flex-col justify-between">
          <div>
            <div className="text-md ">얼마를 넣을까요?</div>
            <div className="w-full">
              <div className="h-full mt-5 relative">
                <div className="w-full absolute border-b-[1px] h-[48px] py-2 text-md font-text">
                  {changedDeposit}
                </div>
                <input
                  type="number"
                  id="input_deposit"
                  onChange={onChangeDepositAmount}
                  onKeyDown={onKeyDownHandler}
                  maxLength="20"
                  className="opacity-0 w-full outline-none text-md"
                />
              </div>
            </div>
          </div>
          <div>
            <LongBtn text="다음" clickFunc={nextStep} />
          </div>
        </div>
      </div>
    );
  } else if (step == 2) {
    return (
      <div className="w-full h-full flex flex-col">
        <Navbar pageTitle={"추억 기록"} />
        <div className="grow-0">
          <Step totalStep={totalStep} currStep={step} />
        </div>
        <div className="w-full h-full flex-col">
          {showImages.length === 0 && (
            <div className="">
              <div className=" text-[#888]">사진 없음</div>
            </div>
          )}
          {showImages.length !== 0 && (
            <div className="wrap w-full">
              <div className="scroll-wrap">
                {showImages.map((image, id) => (
                  <div className="scroll-element rounded-sm" key={id}>
                    <img
                      className="w-full h-full m-auto object-cover"
                      src={image}
                      alt={`${image}-${id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <hr className="hr1 mt-5" />
          <div className="memory-title-box  h-10 mt-3">
            {memoryTitle === "" && (
              <div className=" text-[#888] text-sm">제목 없음</div>
            )}
            {memoryTitle !== "" && (
              <div>
                <label>제목 : </label>
                <span>{memoryTitle}</span>
              </div>
            )}
          </div>
          <hr className="hr1" />
          <div className="memory-content-box h-60 mt-3">
            {memoryDesc === "" && <div className=" text-[#888]">내용 없음</div>}
            {memoryDesc !== "" && (
              <div className="memory-content-box">
                <div className="my-5 h-52">
                  <textarea
                    readOnly
                    className=" w-full h-full focus:outline-none"
                  >
                    {memoryDesc}
                  </textarea>
                </div>
                <div className="text-right text-grey text-xs">
                  <span>{inputCount}</span>
                  <span>/200</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <hr className="hr1 mt-5" />
          </div>
          <div className="memory-deposit-box h-16 flex items-center justify-between">
            <div>입금액</div>
            <div>
              <span className="text-blue">{changedDeposit}</span>
              <span> 원</span>
            </div>
          </div>
          <hr className="hr1" />
          <div className="flex flex-col justify-between">
            <div className="text-[#EB1724] py-2 text-xs">
              * 추억 등록 후 수정이 불가합니다.
            </div>
            <form action="POST" onSubmit={onSubmitMemory}>
              <div>
                <LongBtn text="완료" clickFunc={onSubmitMemory} />
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
