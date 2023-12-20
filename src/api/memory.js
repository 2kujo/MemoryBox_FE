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
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("depositAmount", depopsitAmount);

  // let dataSet = {
  //     title: title1,
  //     content : content1,
  //     depopsitAmount: depopsitAmount1,
  //   };

  for (var i = 0; i < imagesFiles.length; i++) {
    formData.append("imageFiles", imagesFiles[i]);
  }
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  UserApi.post(
    `/cash-boxes/${cashBoxId}/memories`,
    title,
    content,
    depopsitAmount,
    imagesFiles,
    config
  )
    .then(success)
    .catch(fail);
}
