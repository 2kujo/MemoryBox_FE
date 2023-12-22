import UserApi from "@/api/UserApi";

export function requestMemories(cashBoxId, success, fail) {
  console.log(`requestMemories CashBoxId : ${cashBoxId}`);
  UserApi.get(`cash-boxes/${cashBoxId}/memories`).then(success).catch(fail);
}

export function requestMemory(cashBoxId, memoryId, success, fail) {
  console.log(`requestMemory CashBoxId : ${cashBoxId}`);
  console.log(`requestMemory memoryId : ${memoryId}`);
  console.log(`/cash-boxes/${cashBoxId}/memories/${memoryId}`);

  UserApi.get(`/cash-boxes/${cashBoxId}/memories/${memoryId}`)
    .then(success)
    .catch(fail);
}

export function requestCreateMemory(cashBoxId, data, success, fail) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  let formData = new FormData();
  for (let i = 0; i < data.imageFiles.length; i++) {
    formData.append("imageFiles", data.imageFiles[i]);
  }
  formData.append("title", JSON.stringify(data.title));
  formData.append("content", JSON.stringify(data.content));
  formData.append("depositAmount", JSON.stringify(data.depositAmount));

  UserApi.post(`/cash-boxes/${cashBoxId}/memories`, formData, config)
    .then(success)
    .catch(fail);
}
