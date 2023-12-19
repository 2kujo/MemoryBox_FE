import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SpecialCert(){
    const navigate = useNavigate();

    // special cert 발급을 위한 통신 수행 후 intro 페이지로 이동
    useEffect(() => {
        navigate("/")
    }, []);
}