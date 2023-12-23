import React, { useState, useEffect } from "react";

import Navbar from "@/components/common/Navbar";
import ItemsCarousel from "react-items-carousel";
import { useLocation, useParams } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// 시연용
import Image1 from "@/assets/images/first_tooth.png";
import Image2 from "@/assets/images/intro_bibi.png";
import { requestMemory } from "@/api/memory";
// 시연용

export default function Memory() {
  const location = useLocation();
  let params = useParams();

  const cashBoxId = location.state.cashBoxId;
  const cashBoxName = location.state.cashBoxName;
  const memoryId = params.memoryId;
  // const memoryId = location.state.mid;

  console.log(`Memory CashBoxId : ${cashBoxId}`);
  console.log(`Memory memoryId : ${memoryId}`);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [maxImagesIndex, setMaxImagesIndex] = useState(1);
  const [memory, setMemory] = useState({
    memoryId: 0,
    title: "",
    depositAmount: 0,
    createdAt: Date(),
    content: "",
    images: [],
  });

  const handleNextClick = () => {
    setActiveItemIndex((prevIndex) =>
      prevIndex >= maxImagesIndex ? maxImagesIndex : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setActiveItemIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const memoryData = {
    memoryId: 0,
    title: "우리 민조 아랫니",
    depositAmount: 10000,
    createdAt: "2000.10.21",
    content: "추억 상세 페이지 작성중 \n줄넘기기 되냐?",
    images: [Image1, Image2],
  };

  useEffect(() => {
    requestMemory(cashBoxId, memoryId, onSuccess, onFailure);
  }, []);

  function onSuccess(res) {
    console.log(res.data.images);
    console.log(res.data);
    setMemory(res.data);
  }

  function onFailure(err) {
    console.log(err);
  }

  return (
    <div className="overflow-hidden font-text">
      <Navbar pageTitle={cashBoxName} path="/memories" propsObj={{state: {cashBoxId: cashBoxId}}}/>
      {memory.images.length === 0 && (
        <div className="w-[100dvw] h-[100dvw] absolute left-0 items-center flex justify-center">
          <div className="camera-box items-center flex justify-center">
            <div>
              <CameraIcon className="text-grey camera-icon h-16"></CameraIcon>
            </div>
          </div>
        </div>
      )}
      {memory.images.length !== 0 && (
        <div className="w-[100dvw] h-[100dvw] absolute left-0 p-2">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={0}
            leftChevron={
              <div className="rounded-full w-6 h-6 flex items-center justify-center bg-white opacity-50">
                <ChevronLeftIcon className="h-4 w-4 text-grey" />
              </div>
            }
            rightChevron={
              <div className="rounded-full w-6 h-6 flex items-center justify-center bg-white opacity-50">
                <ChevronRightIcon className="h-4 w-4 text-gery" />
              </div>
            }
            outsideChevron={false}
            chevronWidth={40}
          >
            {memory.images.length !== 0 &&
              memory.images.map((image, key) => (
                <img
                  key={key}
                  src={`http://memorybox-ikujo.165.192.105.60.nip.io/image/${image}`}
                  alt={`${activeItemIndex + 1}번째 사진`}
                  className="w-full aspect-square object-cover"
                />
              ))}
          </ItemsCarousel>
        </div>
      )}
      <div className="h-[100vw]"></div>
      <div className="memory-outline h-full flex justify-between p-2">
        <div className="max-w-[60%]">
          <div className="text-sm font-medium">{memory.title}</div>
          <div className="text-xs text-grey">{memory.createdAt}</div>
        </div>
        <div className="text-sm pt-3">
          <span className="text-blue font-bold pr-0.5">
            {memory.depositAmount.toLocaleString("ko-KR")}
          </span>
          <span>원</span>
        </div>
      </div>

      <div className="p-2 text-xs">{memory.content}</div>
      {/* <textarea
        className="memory-content p-2 bg-white text-font1 opacity-90"
        disabled
      >
            
      </textarea> */}
    </div>
  );
}
