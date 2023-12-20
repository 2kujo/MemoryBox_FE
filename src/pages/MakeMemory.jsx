import Navbar from "@/components/common/Navbar";
import React, { useState, useRef } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import LongBtn from "@/components/common/LongBtn";
import Step from "@/components/common/Step";

export default function MakeMemory() {
  const [showImages, setShowImages] = useState([]);
  const [memoryTitle, setMemoryTitle] = useState("");
  const [memoryDesc, setMemoryDesc] = useState("");
  const [depositAmount, setDepositAmount] = useState(0);
  const [changedDeposit, setChangedDeposit] = useState("");

  const [inputCount, setInputCount] = useState(0);
  const [step, setStep] = useState(0);
  const totalStep = 3;

  const elementRef = useRef(null);

  function nextStep() {
    setStep(step + 1);
  }
  //   이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    moveScroll();
  };

  function onChangeMemoryTitle(event) {
    const memoryTitle = event.target.value;
    setMemoryTitle(memoryTitle);
  }

  const onChangeMemoryDesc = (event) => {
    setInputCount(event.target.value.length);
    setMemoryDesc(event.target.value);
  };

  const onChangeDepositAmount = (event) => {
    let num = event.target.value;
    // 금액 콤마 찍기
    console.log("dd" + num);
    console.log(Number(num));
    setDepositAmount(Number(num));
    setChangedDeposit(
      num.replaceAll(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );

    console.log(depositAmount);
  };

  //스크롤 하기 실패
  function moveScroll() {
    console.log(elementRef.current);
    document.getElementsByClassName("scroll-wrap").scrollLeft += 10000;
  }

  const onKeyDownHandler = (event) => {};

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
              onKeyDown={onKeyDownHandler}
            ></input>
          </div>
          <hr className="hr1" />
          <div className="memory-content-box">
            <div className="my-5 h-52">
              <textarea
                className="w-full focus:outline-none "
                type="text"
                id="memory_title"
                placeholder="내용을 작성해주세요"
                autoComplete="off"
                maxLength="200"
                onChange={onChangeMemoryDesc}
              ></textarea>
            </div>
            <div className="text-right text-grey text-xs">
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
              <input
                type="text"
                id="input_deposit"
                value={changedDeposit}
                onChange={onChangeDepositAmount}
                maxLength="20"
                className="border-b-[1px] w-full py-2 outline-none text-md mt-5"
              />
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
            {memoryDesc !== "" && <div className="">{memoryDesc}</div>}
          </div>
          <div>
            <hr className="hr1" />
          </div>
          <div className="memory-deposit-box h-16 flex items-center justify-between">
            <div>입금액</div>
            <div>
              <span className="text-blue">{depositAmount}</span>
              <span> 원</span>
            </div>
          </div>
          <hr className="hr1" />
          <div className="flex flex-col justify-between">
            <div className="text-[#EB1724] py-2 text-xs">
              * 추억 등록 후 수정이 불가합니다.
            </div>
            <div>
              <LongBtn text="다음" clickFunc={nextStep} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
