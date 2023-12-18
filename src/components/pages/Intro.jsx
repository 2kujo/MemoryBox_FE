import IntroBibi from '../../assets/images/intro_bibi.png'
import LongBtn from '../../components/common/LongBtn.jsx'
import FloatingBtn from '../../components/common/FloatingBtn.jsx'
import Tab from '../../components/common/Tab.jsx'
import AnivPop from '../../components/pages/AnivPop.jsx'

export default function Intro(){
    const needPop = true;
    const tabList = [
        {key: 0, title: '저금중', contents: <div className="0"></div>},
        {key: 1, title: '저금 완료', contents: <div className="1"></div>}
    ];
    function startIntro(){

    }
    return (
        <>
        <Tab tabList={tabList}/>
        {/* <div className="flex w-full h-full justify-center items-center">
            <div>
                <div>
                    <div className="text-4xl text-center font-display mb-3">KB 추억 저금통</div>
                    <div className="text-grey text-xl text-center font-text">추억을 저금하세요</div>
                    <div className="mt-10 mb-20">
                        <img className="mx-auto" src={IntroBibi} alt="" />
                    </div>
                    <LongBtn text="시작하기" clickFunc={startIntro}/>
                    <FloatingBtn/>
                </div>
            </div>
        </div> */}
        <AnivPop memoriesTitle="우리 민조" memoriesDuration="100"/>
        </>
    )
}