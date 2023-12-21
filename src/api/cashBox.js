import UserApi from "@/api/UserApi";

export function getCashBoxes(isFinished, success, fail) {
  UserApi.get(`cash-boxes?isFinished=${isFinished}}`).then(success).catch(fail);
}

export function getCashBox(cashBoxId, params, success, fail) {
  UserApi.get(`cash-boxes/${cashBoxId}`, {
    params,
  })
    .then(success)
    .catch(fail);
}


export function createCashBox({data}, success, fail) {
  UserApi.post(
    `/cash-boxes`, data
  )
  .then(success)
  .catch(fail);
}

