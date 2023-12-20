import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function FloatingBtn(props) {
  const type = props.type;

  if (type == "add") {
    return (
      <button
        className="w-16 h-16 bg-yellow rounded-full fixed right-4 bottom-4 drop-shadow-md flex justify-center items-center"
        onClick={props.clickFunc}
      >
        <PlusIcon className="h-10 w-10 text-[#ffffff]" />
      </button>
    );
  } else if (type == "write") {
    return (
      <button
        className="w-16 h-16 bg-yellow rounded-full fixed right-4 bottom-4 drop-shadow-md flex justify-center items-center"
        onClick={props.clickFunc}
      >
        <PencilIcon className="h-8 w-8 text-[#ffffff]" />
      </button>
    );
  } else if (type == "album") {
    return (
      <button
        className="w-16 h-16 bg-yellow rounded-full fixed right-4 bottom-4 flex justify-center items-center drop-shadow-md"
        onClick={props.clickFunc}
      >
        <img
          src="/src/assets/images/album1.svg"
          alt="디지털 앨범 아이콘"
          className="w-8 h-8 text-white"
        />
      </button>
    );
  }
}
