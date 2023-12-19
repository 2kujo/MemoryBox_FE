import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function FloatingBtn(props) {
  const type = props.type;

  if (type == "add") {
    return (
      <button
        className="w-16 h-16 pl-3 bg-yellow rounded-full absolute right-4 bottom-4"
        onClick={props.clickFunc}
      >
        <PlusIcon className="h-10 w-10 text-[#ffffff]" />
      </button>
    );
  } else if (type == "write") {
    return (
      <button
        className="w-16 h-16 pl-4 bg-yellow rounded-full absolute right-4 bottom-4"
        onClick={props.clickFunc}
      >
        <PencilIcon className="h-8 w-8 text-[#ffffff]" />
      </button>
    );
  } else if (type == "album") {
    return (
      <button
        className="w-16 h-16 bg-yellow rounded-full absolute right-4 bottom-4 flex justify-center items-center"
        onClick={props.clickFunc}
      >
        <img
          src="/src/assets/images/album3.svg"
          alt="디지털 앨범 아이콘"
          className="w-8 h-8 text-white"
        />
      </button>
    );
  }
}
