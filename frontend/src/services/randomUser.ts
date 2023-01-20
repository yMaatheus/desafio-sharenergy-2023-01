import axios from "axios";

export const getRandomUser = (page: number, quantity: number) => {
  const URL = `https://randomuser.me/api/?
  inc=picture,name,email,login,dob&page=${page}&results=${quantity}&nat=br,us,dk,fr,gb&seed=abc`;
  return axios.get(URL);
};
