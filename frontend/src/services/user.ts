import api from "./api";

type LoginData = {
  userName: string;
  password: string;
};

export const login = (data: LoginData) => api.post("/login", data);