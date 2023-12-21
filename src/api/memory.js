import UserApi from "@/api/UserApi";

export function requestMemories(cashBoxId, success, fail) {
  console.log(`requestMemories CashBoxId : ${cashBoxId}`);
  UserApi.get(`cash-boxes/${cashBoxId}/memories`).then(success).catch(fail);
}

export function requestMemory(cashBoxId, memoryId, success, fail) {
  console.log(`requestMemory CashBoxId : ${cashBoxId}`);
  console.log(`requestMemory memoryId : ${memoryId}`);
  console.log(`/cash-boxes/${cashBoxId}/memories/${memoryId}`);


    UserApi.get(
      `/cash-boxes/${cashBoxId}/memories/${memoryId}`).then(success).catch(fail);
}

export function requestCreateMemory(cashBoxId, data, success, fail) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  UserApi.post(
    `/cash-boxes/${cashBoxId}/memories`,
    {
      title: data.title,
      content: data.content,
      depositAmount: data.depositAmount,
      imagesFiles: data.imagesFiles,
    },
    config
  )
    .then(success)
    .catch(fail);
}
