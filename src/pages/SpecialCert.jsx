import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { getCookie, setCookie } from "@/api/Cookies";
import { getCert } from "@/api/cert";

export default function SpecialCert(){
    const navigate = useNavigate();

    // special cert 발급을 위한 통신 수행 후 intro 페이지로 이동
    useEffect(() => {
        let userId = getCookie(setCookie("memorybox-user-id"));        
        if (userId) {
            setCookie("memorybox-special-user", userId);
            return;
        }
        getCert((data) => {
            setCookie("memorybox-user-id", data.data.userId);
            setCookie("memorybox-special-user", data.data.userId);
            navigate("/");
        });

    }, []);
}