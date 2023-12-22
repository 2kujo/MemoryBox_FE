import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/outline";

import AlbumImage from "@/assets/images/sample_album.png"

export default function DigitalAlbum() {
  const navigate = useNavigate();
  const location = useLocation();

  const cashBoxId = location.state.cashBoxId;

  function closeDigitalAlbum() {
    navigate("/memories", {state: {cashBoxId: cashBoxId}});
  }

  return (
    <div>
      <button
        onClick={closeDigitalAlbum}
        className="inline-block w-10 h-10 pl-2 bg-yellow rounded-full absolute right-4 top-4 close-pop-btn z-10"
      >
        <XMarkIcon className="h-6 w-6 text-[#ffffff]" />
      </button>
      <img
        src={AlbumImage}
        alt={`저금완료된 추억저금통 디지털 앨범`}
        className="absolute left-0 top-0 z-0"
      />
    </div>
  );
}
