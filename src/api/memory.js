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
  console.log("타이틀");

  console.log(data.title);
  console.log("JSON 타이틀");
  console.log(JSON.stringify(data.title));

  let formData = new FormData();
  for (let i = 0; i < data.imageFiles.length; i++) {
    formData.append("imageFiles", data.imageFiles[i]);
  }
  formData.append("title", data.title);
  formData.append("content", data.content);
  formData.append("depositAmount", data.depositAmount);

  UserApi.post(`/cash-boxes/${cashBoxId}/memories`, formData, config)
    .then(success)
    .catch(fail);
}
