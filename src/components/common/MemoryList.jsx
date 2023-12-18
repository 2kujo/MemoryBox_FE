import React from "react";

export default function MemoryList({ memoryContents }) {
  return (
    <div>
      {memoryContents.map((memory, memoryId) => (
        <div
          key={memoryId}
          className="cash-box-memory px-3 py-3 flex justify-between items-center border-b border-b-silver"
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
          <img
            className="w-20 h-20 rounded-sm"
            src={memory.images[0]}
            alt={`${memory.title}`}
          />
        </div>
      ))}
    </div>
  );
}
