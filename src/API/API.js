import * as axios from "axios";

export const getMe = () => {
  return axios.get("http://localhost:3012/api/auth/me");
};
// http://localhost:3012/api/auth/me
// http://37.77.104.65:8080
export const getStateAPI = () => {
  return axios.get("http://localhost:3012/state");
};

export const postSpec = (dataPush) => {
  return axios.post("http://localhost:3012/push/post", { dataPush });
};

export const login = (loginValues) => {
  return axios.post("http://localhost:3012/api/auth/login", { loginValues });
};

export const registration = (registrationValues) => {
  return axios.post("http://localhost:3012/api/auth/reg", {
    registrationValues,
  });
};







export const daDataInn = (inn) => {
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
var token = "1a6f294d66b0b52307e0a584ab045b75e5b8ef2d";

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: inn }),
  };

    return axios.post(url, options)
  // fetch(url, options)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
};

export const daDataBik =(bik)=>{
  var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/bank";
var token = "1a6f294d66b0b52307e0a584ab045b75e5b8ef2d";


var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: bik})
}
return axios.post(url, options)
// fetch(url, options)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log("error", error));
}