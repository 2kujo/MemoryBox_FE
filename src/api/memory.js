import UserApi from "@/api/UserApi";

export function requestMemories(cashBoxId, success, fail) {
  UserApi.get(`cash-boxed/${cashBoxId}/memories`).then(success).catch(fail);
}

export function requestMemory(cashBoxId, memoryId, success, fail) {
  UserApi.get(
    `/cash-boxes/${cashBoxId}/memories/${memoryId}`.then(success).catch(fail)
  );
}

export function requestCreateMemory(
  cashBoxId,
  title,
  content,
  depopsitAmount,
  imagesFiles,
  success,
  fail
) {
  UserApi.post(`/cash-boxes/${cashBoxId}/memories`, params)
    .then(success)
    .catch(fail);
}
