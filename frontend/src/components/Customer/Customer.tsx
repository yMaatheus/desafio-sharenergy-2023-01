import { useEffect } from "react";
import { setCustomers } from "../../redux/slice";
import { useAppDispatch } from "../../redux/hooks";
import CustomerList from "../CustomerList";
import { getCustomerList } from "../../services/customer";
import CustomerCreateForm from "../CustomerCreateForm";

const Customer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadCustomers = async () => {
      const { data } = await getCustomerList();

      dispatch(setCustomers(data));
    };

    loadCustomers();
  }, [dispatch]);

  return (
    <>
      <CustomerCreateForm />
      <CustomerList />
    </>
  );
};

export default Customer;
