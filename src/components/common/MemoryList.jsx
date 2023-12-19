import React from "react";
import { useNavigate } from "react-router-dom";

export default function MemoryList({ memoryContents }) {
  const navigate = useNavigate();

  function onClickMemoryDetail(memoryId) {
    navigate(`/memories/${memoryId}`);
  }

  return (
    <div>
      {memoryContents.map((memory, memoryId) => (
        <div
          key={memoryId}
          className="cash-box-memory px-3 py-3 flex justify-between items-center border-b border-b-silver"
          onClick={() => onClickMemoryDetail(memoryId)}
        >
          <div className="memory-text">
            <div className="text-sm">{memory.title}</div>
            <div className="text-xs text-grey">{memory.createAt}</div>
            <div className="text-sm pt-3">
              <span className="text-blue font-bold">
                {memory.depositAmout.toLocaleString("ko-KR")}
              </span>
              <span>원</span>
            </div>
          </div>
          <div className="w-20 h-20 overflow-hidden rounded-sm">
            <img
              className="w-full h-full m-auto object-cover"
              src={memory.images[0]}
              alt={`${memory.title}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
