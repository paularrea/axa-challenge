import axios from "axios";

export function requestGetData() {
  return axios.request({
    method: "get",
    url: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  });
}
