import axios from "axios";

export default function RegistMemory(
  memoryTitle,
  memoryDesc,
  depositAmount,
  imgList
) {
  axios
    .post("accounts/user/login/", {
      username: username,
      password: password,
    })
    .then(success)
    .catch(fail);
}
