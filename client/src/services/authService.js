import apiClient from "./apiConfig";

const loginPath = "/users/login";
const logoutPath = "/users/logout"

const loginApiCall = async (payload)=>{
  const loginData = await apiClient.post(loginPath, payload)
  return loginData;
}

const logoutApiCall = async (payload)=>{
  const logoutData = await apiClient.post(logoutPath, payload);
  return logoutData
}

export { loginApiCall, logoutApiCall };