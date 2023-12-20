import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { Cookies } from "react-cookie";

export default function SpecialCert(){
    const navigate = useNavigate();

    const CertApi = axios.create({
        baseURL: "http://memorybox-cert:8080/",
        headers: {
          "Content-Type": "application/json",
        },
    });

    const cookies = new Cookies();

    async function getSpecialCert() { // async, await을 사용하는 경우
        try {
            // GET 요청은 params에 실어 보냄
          const response = await axios.get('/special-cert', {});
          console.log(response);
        } catch (e) {
          // 실패 시 처리
          console.error(e);
        }
    }
      

    // special cert 발급을 위한 통신 수행 후 intro 페이지로 이동
    useEffect(() => {
        try{
            console.log(cookies);
            getSpecialCert()
        }catch(e){

        }
        // navigate("/");
    }, []);
}