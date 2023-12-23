import CertApi from "@/api/CertApi";

export function getCert(success, fail) {
    CertApi.get(`cert`).then(success).catch(fail);
}

