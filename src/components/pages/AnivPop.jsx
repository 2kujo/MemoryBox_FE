import Img01 from '../../assets/images/popup_img_01.png'
import Img02 from '../../assets/images/popup_img_02.png'
import Img03 from '../../assets/images/popup_img_03.png'
import Img04 from '../../assets/images/popup_img_04.png'
import Img05 from '../../assets/images/popup_img_05.png'
import Img06 from '../../assets/images/popup_img_06.png'
import Img07 from '../../assets/images/popup_img_07.png'
import Img08 from '../../assets/images/popup_img_08.png'
import Img09 from '../../assets/images/popup_img_09.png'
import Img10 from '../../assets/images/popup_img_10.png'
import LongBtn from '../../components/common/LongBtn.jsx'
import './AnivPop.css'

export default function AnivPop(props){
    function closePop(){

    }
    return (
        <div id="anivversary-pop" className="w-screen h-screen">
            <div className="bg-dim w-screen h-screen absolute left-0 top-0 z-40"></div>
            <div className="bg-white w-screen h-screen px-10 py-24 text-left absolute left-0 z-50 bottom-to-top-pop">
                <button className="w-10 h-10 bg-yellow rounded-full absolute right-4 top-4 close-pop-btn"></button>
                <div className="text-xl font-text"><span className="font-bold">{props.memoriesTitle}</span> {props.memoriesDuration}일째</div>
                <div className="text-xl font-text mb-[35px]">그동안 추억을 되돌아보세요~</div>
                <div className="image-con relative overflow-hidden bg-yellow h-4/6 mb-[50px]">
                    <img src={Img01} alt="" />
                    <img src={Img02} alt="" />
                    <img src={Img03} alt="" />
                    <img src={Img04} alt="" />
                    <img src={Img05} alt="" />
                    <img src={Img06} alt="" />
                </div>
                <LongBtn text="보러가기" clickFunc={props.memoriesUrl}/>
            </div>
        </div>
    )
}