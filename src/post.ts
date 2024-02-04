import axios from "axios";
export async function post(url = "", data = {}) {
  var config = {
    method: "post",
    url: url,
    data: data,
  };
  return axios(config);
}
