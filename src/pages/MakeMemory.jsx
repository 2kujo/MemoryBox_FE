import Navbar from "@/components/common/Navbar";
import React, { useState, useRef } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import LongBtn from "@/components/common/LongBtn";

export default function MakeMemory() {
  //   const [memoryTitle, setMemoryTitle] = useState("");

  //   function onChangeMemoryTitle(event) {
  //     const memoryTitle = event.target.value;
  //     setMemoryTitle(memoryTitle);
  //   }
  //   const [duration, setDuration] = React.useState(500);
  //   const [isSlide, setIsSlide] = useState(false);

  const [showImages, setShowImages] = useState([]);
  const [step, setStep] = useState(0);
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

  function moveScroll() {
    console.log(elementRef.current);
    document.getElementsByClassName("scroll-wrap").scrollLeft += 10000;
  }

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const [inputCount, setInputCount] = useState(0);

  const onTextareaHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  if (step == 0) {
    return (
      <div className="w-full h-full">
        <Navbar pageTitle={"추억 기록"} />
        <hr className="hr-nav" />

        <div className="mt-4 w-full h-full flex-col justify-between ">
          <div className="wrap">
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

          <hr className="hr1" />

          <div className="memory-title-box">
            <input
              className="mt-5 w-full"
              type="text"
              id="memory_title"
              placeholder="제목을 입력하세요(선택사항)"
              autoComplete="off"
              //onChange={onChangeMemoryTitle}
            ></input>
          </div>
          <hr className="hr1 mt-5" />
          <div className="memory-content-box h-[25vh]">
            <textarea
              className="mt-5 w-full h-full"
              type="text"
              id="memory_title"
              placeholder="내용을 작성해주세요"
              autoComplete="off"
              maxLength="200"
              onChange={onTextareaHandler}
            ></textarea>
            <p>
              <span>{inputCount}</span>
              <span>/200</span>
            </p>
          </div>
          <hr className="hr1 mt-5" />
          <div className="mt-20">
            <LongBtn text="다음" clickFunc={nextStep} />
          </div>
        </div>
      </div>
    );
  } else if (step == 1) {
    return (
      <div className="w-full h-full">
        <Navbar />
        <div className="mt-4 flex w-full h-full flex-col justify-between">
          <div>
            <div className="mb-1 text-xl font-text">얼마를 넣을까요?</div>
            <div className="w-full">
              <input
                type="text"
                // value={cashboxName}
                // onChange={handleCashboxNameChange}
                maxLength="20"
                className="border-b-[1px] w-full py-2 outline-none text-md font-text"
              />
            </div>
          </div>
          <div className="mb-16">
            <LongBtn text="다음" clickFunc={nextStep} />
          </div>
        </div>
      </div>
    );
  }
}
