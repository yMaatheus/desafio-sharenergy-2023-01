import { getToken } from "./../utils/localStorage.util";
import api from "./api";

export const getCustomerList = () =>
  api.get("/customer", { headers: { Authorization: getToken() } });
