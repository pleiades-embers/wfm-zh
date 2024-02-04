import axios from "axios";
export async function post(url = "", data = {}) {
  var config = {
    method: "post",
    url: url,
    data: JSON.stringify(data),
  };
  return axios(config);
}
