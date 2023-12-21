import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import AlbumIcon from "@/assets/images/album1.svg";

export default function FloatingBtn(props) {
  const type = props.type;

  if (type == "add") {
    return (
      <button
        className="w-14 h-14 bg-yellow rounded-full fixed right-5 bottom-5 drop-shadow-md flex justify-center items-center"
        onClick={props.clickFunc}
      >
        <PlusIcon className="h-8 w-8 text-[#ffffff]" />
      </button>
    );
  } else if (type == "write") {
    return (
      <button
        className="w-14 h-14 bg-yellow rounded-full fixed right-5 bottom-5 drop-shadow-md flex justify-center items-center"
        onClick={props.clickFunc}
      >
        <PencilIcon className="w-7 h-7 text-[#ffffff]" />
      </button>
    );
  } else if (type == "album") {
    return (
      <button
        className="w-14 h-14 bg-yellow rounded-full fixed right-5 bottom-5 flex justify-center items-center drop-shadow-md"
        onClick={props.clickFunc}
      >
        <img
          src={AlbumIcon}
          alt="디지털 앨범 아이콘"
          className="w-7 h-7 text-white"
        />
      </button>
    );
  }
}
