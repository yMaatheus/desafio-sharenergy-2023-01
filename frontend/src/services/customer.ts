import { getToken } from "./../utils/localStorage.util";
import api from "./api";

type requestCustomerType = {
  email: string;
  name: string;
  phone: string;
  address: string;
  cpf: string;
};

export const getCustomerList = () =>
  api.get("/customer", { headers: { Authorization: getToken() } });

export const createCustomer = (data: requestCustomerType) =>
  api.post("/customer", data, { headers: { Authorization: getToken() } });

export const updateCustomer = (id: string, data: requestCustomerType) =>
  api.put(`/customer/${id}`, data, { headers: { Authorization: getToken() } });
