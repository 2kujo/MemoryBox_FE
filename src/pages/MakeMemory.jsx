import React, { useState, useEffect } from "react";

import Navbar from "@/components/common/Navbar";
import LongBtn from "@/components/common/LongBtn";
import Step from "@/components/common/Step";

import { CameraIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

import { ToastContainer, toast } from "react-toastify";

import { useNavigate, useLocation } from "react-router-dom";
import { requestCreateMemory } from "@/api/memory";

export default function MakeMemory() {
  const [showImages, setShowImages] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [tmpImgList, setTmpImgList] = useState([]);

  const [memoryTitle, setMemoryTitle] = useState("");
  const [memoryDesc, setMemoryDesc] = useState("");
  const [depositAmount, setDepositAmount] = useState(0);
  const [changedDeposit, setChangedDeposit] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const [step, setStep] = useState(0);
  const totalStep = 3;

  const navigate = useNavigate();
  const location = useLocation();

  const cashBoxId = location.state.cashBoxId;

  useEffect(() => {
    if ("state" in location && location.state != null) {
      if ("step" in location.state) {
        setStep(location.state.step);
        delete location.state.step;
      }
    }
  });

  useEffect(() => {
    const finalList = [];
    if (imageList.length !== 0) {
      for (let i = 0; i < imageList.length; i++) {
        finalList.push(imageList[i]);
      }
    }

    for (let i = 0; i < tmpImgList.length; i++) {
      finalList.push(tmpImgList[i]);
    }
    console.log(finalList);
    setImageList(finalList);
  }, [tmpImgList]);

  function nextStep() {
    if (isValidNextStep()) {
      setStep(step + 1);
      toast.dismiss();
    } else {
      toast(validVal[step] + " 필수 입력값입니다");
    }
  }

  const validVal = {
    0: "사진 혹은 내용은",
    1: "입금액은",
  };

  // 스텝 이동에 대한 입력값 valid check
  function isValidNextStep() {
    if (step == 0 && memoryDesc === "" && showImages.length === 0) {
      return false;
    } else if (step == 1 && changedDeposit === "") {
      return false;
    }

    return true;
  }

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;

    setTmpImgList(imageLists);

    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (idx) => {
    setShowImages(
      showImages.filter(function (_, index) {
        return index !== idx;
      })
    );

    const newList = [];
    for (let i = 0; i < imageList.length; i++) {
      if (i == idx) continue;
      newList.push(imageList[i]);
    }

    setImageList(newList);
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
    if (
      event.code === "Enter" ||
      event.code === "enter" ||
      event.keyCode === 13
    ) {
      event.target.blur();
    }
  };

  function onSubmitMemory(event) {
    event.preventDefault();

    console.log(imageList);
    const data = {
      title: memoryTitle,
      content: memoryDesc,
      depositAmount: depositAmount,
      imageFiles: imageList,
    };

    requestCreateMemory(cashBoxId, data, onSuccess, onFailure);
  }

  function onSuccess(res) {
    const memoryId = res.data.memoryId;
    console.log(memoryId);
    navigate(`/memories/${memoryId}`, { state: { cashBoxId: cashBoxId } });
  }

  function onFailure(err) {
    console.log(err);
  }

  if (step == 0) {
    return (
      <div className="w-full h-full flex flex-col">
        <ToastContainer />
        <Navbar
          pageTitle={"추억 기록"}
          path="/memories"
          propsObj={{ state: { cashBoxId: cashBoxId } }}
        />
        <div className="grow-0">
          <Step totalStep={totalStep} currStep={step} />
        </div>

        <div className="w-full h-full">
          <div className="wrap w-full">
            <div className="scroll-wrap">
              {showImages.map((image, id) => (
                <div className="scroll-element relative" key={id}>
                  <img
                    className="w-[92%] h-[92%] m-auto object-cover absolute rounded-sm bottom-0"
                    src={image}
                    alt={`${image}-${id}`}
                  />
                  <XCircleIcon
                    className="h-6 w-6 text-[#ADADAD] absolute right-[-0.1rem] top-[-0.1rem]"
                    onClick={() => handleDeleteImage(id)}
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
                    <div className="text-[#888]">
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
              value={memoryTitle}
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
                value={memoryDesc}
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
        <ToastContainer />
        <Navbar
          pageTitle={"추억 기록"}
          path="/make-memory"
          propsObj={{ state: { cashBoxId: cashBoxId, step: 0 }, replace: true }}
        />
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
                  className="opacity-0 w-full focus:outline-none text-md"
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
        <Navbar
          pageTitle={"추억 기록"}
          path="/make-memory"
          propsObj={{ state: { cashBoxId: cashBoxId, step: 1 }, replace: true }}
        />
        <div className="grow-0">
          <Step totalStep={totalStep} currStep={step} />
        </div>

        <div className="text-[#888] text-sm flex justify-start items-center">
          <PencilIcon class="h-4 w-4 text-gray-500 mr-2" />

          <div>입력한 정보를 확인해주세요</div>
        </div>

        <div className="text-[#EB1724] py-2 text-xs">
          * 추억 등록 후 수정이 불가합니다.
        </div>
        <hr className="mb-5" />
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
          <div className="memory-title-box my-1">
            {memoryTitle === "" && (
              <div className=" text-[#888] text-sm">제목 없음</div>
            )}
            {memoryTitle !== "" && (
              <div>
                <span>{memoryTitle}</span>
              </div>
            )}
          </div>
          <hr className="hr1" />
          <div className="memory-content-box h-40 mt-2">
            {memoryDesc === "" && <div className=" text-[#888]">내용 없음</div>}
            {memoryDesc !== "" && (
              <div className="memory-content-box">
                <div className="h-40">
                  <textarea
                    readOnly
                    className=" w-full h-full focus:outline-none"
                  >
                    {memoryDesc}
                  </textarea>
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
          <div className="flex flex-col justify-between mt-5">
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
