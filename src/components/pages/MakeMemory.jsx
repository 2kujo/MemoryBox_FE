import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
export default function MakeMemory() {
  //   const [memoryTitle, setMemoryTitle] = useState("");

  //   function onChangeMemoryTitle(event) {
  //     const memoryTitle = event.target.value;
  //     setMemoryTitle(memoryTitle);
  //   }
  //   const [duration, setDuration] = React.useState(500);
  //   const [isSlide, setIsSlide] = useState(false);

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  const [showImages, setShowImages] = useState([]);

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
  };

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const [inputCount, setInputCount] = useState(0);

  const onTextareaHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <div className="h-full w-full text-left">
      <hr className="hr1" />

      <div>
        <label htmlFor="gallery-input-file" onChange={handleAddImages}>
          <input
            type="file"
            id="gallery-input-file"
            multiple="multiple"
            style={{ display: "none" }}
          />
          <ScrollMenu className="photo-preview" onWheel={onWheel}>
            {showImages.map((image, id) => (
              <div key={id}>
                <img src={image} alt={`${image}-${id}`} />
              </div>
            ))}
          </ScrollMenu>
          {/* <div  ></div> */}
          <span>사진추가</span>
        </label>
      </div>
      <hr className="hr1" />

      <div className="memory-title-box h-[5vh]">
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
      <div className="memory-content-box h-[30vh]">
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
      <div>
        <button className="rounded-lg text-lg inline-block w-full h-14 bg-yellow mt-10">
          다음
        </button>
      </div>
    </div>
  );
}
