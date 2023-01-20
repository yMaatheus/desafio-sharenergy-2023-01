import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerType } from "../types/Customer";

interface initialStateType {
  customers: CustomerType[];
  updateMode: boolean;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

const initialState: initialStateType = {
  customers: [],
  updateMode: false,
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
} = reduxSlice.actions;

export default reduxSlice.reducer;
