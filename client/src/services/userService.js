import apiClient from "./apiConfig";

const userDetailsPath = (userId)=> `/users/${userId}`;

const getUserDetails = async (userId)=>{
  const res = apiClient.get(userDetailsPath(userId));
  return res;
}

export { getUserDetails };