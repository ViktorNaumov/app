import axios from "axios";

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.Authorization;
  }
}

