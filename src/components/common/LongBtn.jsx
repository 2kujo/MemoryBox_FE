export default function LongBtn(props) {
  return (
    <button
      className="bg-yellow rounded-lg w-full p-2 font-text text-md"
      onClick={props.clickFunc}
    >
      {props.text}
    </button>
  );
}
