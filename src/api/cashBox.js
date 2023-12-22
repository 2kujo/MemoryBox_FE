import UserApi from "@/api/UserApi";

export function getCashBoxes(isFinished, success, fail) {
  UserApi.get(`cash-boxes?isFinished=${isFinished}`).then(success).catch(fail);
}

export function getCashBox(cashBoxId, success, fail) {
  UserApi.get(`cash-boxes/${cashBoxId}`).then(success).catch(fail);
}

export function createCashBox(data, success, fail) {
  UserApi.post(`/cash-boxes`, data).then(success).catch(fail);
}
