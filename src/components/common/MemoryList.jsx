import React from "react";
import { useNavigate } from "react-router-dom";

export default function MemoryList({ memoryContents, cashBoxId, cashBoxName }) {
  const navigate = useNavigate();

  console.log(`MemoryList CashBoxId : ${cashBoxId}`);

  console.log(memoryContents);

  function onClickMemoryDetail(memoryId) {
    navigate(`/memories/${memoryId}`, {
      state: { cashBoxId: cashBoxId, cashBoxName: cashBoxName },
    });
  }

  return (
    <div>
      {memoryContents.map((memory, memoryId) => (
        <div
          key={memoryId}
          className="cash-box-memory px-3 py-3 flex justify-between items-center border-b border-b-silver w-full"
          onClick={() => onClickMemoryDetail(memory.memoryId)}
        >
          <div className="memory-text w-4/6">
            <div className="text-sm">{memory.title}</div>
            <div className="text-xs text-grey">{memory.createdAt}</div>
            <div className="text-sm pt-3">
              <span className="text-blue font-bold">
                {memory.depositAmount.toLocaleString("ko-KR")}
              </span>
              <span>원</span>
            </div>
          </div>
          <div className="w-20 h-20 overflow-hidden rounded-sm">
            {memory.image !== "/" && (
              <img
                className="w-full h-full m-auto object-cover"
                src={`http://memorybox-ikujo.165.192.105.60.nip.io/image/${memory.image}`}
                alt={`${memory.title}`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
