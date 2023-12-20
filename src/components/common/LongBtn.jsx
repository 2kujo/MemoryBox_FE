export default function LongBtn(props) {
  return (
    <button
      className="bg-yellow rounded-lg w-full p-2 font-text text-xl"
      onClick={props.clickFunc}
    >
      {props.text}
    </button>
  );
}
