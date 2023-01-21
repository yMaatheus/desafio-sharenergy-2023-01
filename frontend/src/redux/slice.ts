import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerType } from "../types/Customer";

interface initialStateType {
  customers: CustomerType[];
  updateMode: boolean;
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

const initialState: initialStateType = {
  customers: [],
  updateMode: false,
  _id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  cpf: "",
};

export const reduxSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<CustomerType[]>) => {
      state.customers = [...action.payload];
    },
    addCustomer: (state, action: PayloadAction<CustomerType>) => {
      state.customers = [...state.customers, action.payload];
    },
    removeCustomer: (state, action: PayloadAction<CustomerType>) => {
      state.customers = [
        ...state.customers.filter(
          (customer) => customer._id !== action.payload._id
        ),
      ];
    },
    setUpdateMode: (state, action: PayloadAction<boolean>) => {
      state.updateMode = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setCpf: (state, action: PayloadAction<string>) => {
      state.cpf = action.payload;
    },
    reset: (state) => {
      state.updateMode = false;
      state._id = "";
      state.email = "";
      state.name = "";
      state.phone = "";
      state.address = "";
      state.cpf = "";
    },
    updateMode: (state, action: PayloadAction<CustomerType>) => {
      state.updateMode = true;
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.cpf = action.payload.cpf;
    },
  },
});

export const {
  setCustomers,
  addCustomer,
  removeCustomer,
  setUpdateMode,
  setName,
  setEmail,
  setPhone,
  setAddress,
  setCpf,
  reset,
  updateMode,
} = reduxSlice.actions;

export default reduxSlice.reducer;
