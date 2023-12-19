import React, { useState } from "react";

import Navbar from "@/components/common/Navbar";
import ItemsCarousel from "react-items-carousel";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Memory() {
  const [cashBoxTitle, setCashBoxTitle] = useState("우리 민조");
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [maxImagesIndex, setMaxImagesIndex] = useState(1);

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
    title: "우리 민조",
    depositAmount: 10000,
    createdAt: "2000.10.21",
    content: "추억 상세 페이지 작성중 \n 줄넘기기 되냐?",
    images: [
      "/src/assets/images/first_tooth.png",
      "/src/assets/images/intro_bibi.png",
    ],
  };

  return (
    <div>
      <Navbar pageTitle={cashBoxTitle} />
      <div className="relative w-screen h-[100vw]">
        <div className="w-full h-full absolute left-0">
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
            {memoryData.images.map((image, key) => (
              <img
                key={key}
                src={image}
                alt={`${activeItemIndex + 1}번째 사진`}
                className="w-full aspect-square object-cover"
              />
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div className="memory-outline flex justify-between">
        <div className="">
          <div className="text-sm">{memoryData.title}</div>
          <div className="text-xs text-grey">{memoryData.createdAt}</div>
        </div>
        <div className="text-sm pt-3">
          <span className="text-blue font-bold">
            {memoryData.depositAmount.toLocaleString("ko-KR")}
          </span>
          <span>원</span>
        </div>
      </div>
    </div>
  );
}
