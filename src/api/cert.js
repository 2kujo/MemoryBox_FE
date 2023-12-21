import CertApi from "@/api/CertApi";

export function getCert(success, fail) {
    CertApi.get(`cert`).then(success).catch(fail);
}

export function getSpecialCert(success, fail) {
    CertApi.get(`special-cert`).then(success).catch(fail);
}
