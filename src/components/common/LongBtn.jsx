export default function LongBtn(props) {
  return (
    <button
      className={`${props.type == 'white' ? 'bg-white' : 'bg-yellow'} rounded-lg w-full p-2 font-text text-md`}
      onClick={props.clickFunc}
    >
      {props.text}
    </button>
  );
}
