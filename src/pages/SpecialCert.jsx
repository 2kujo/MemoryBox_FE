import axios from "axios";
// import { getCookie } from "@/api/Cookies";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SpecialCert(){
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const UserApi = axios.create({
    baseURL: "http://memorybox-cert:8080/special-cert",
    headers: {
        "Content-Type": "application/json",
    },
    });

    // special cert 발급을 위한 통신 수행 후 intro 페이지로 이동
    useEffect(() => {
        navigate("/")
    }, []);
}