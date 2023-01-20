import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setEmail, setUpdateMode } from "../../redux/slice";
import { CustomerType } from "../../types/Customer";

const CustomerList = () => {
  const customers = useAppSelector((state) => state.app.customers);
  const dispatch = useAppDispatch();

  const handleUpdate = (customer: CustomerType) => {
    dispatch(setUpdateMode(true));
    dispatch(setEmail(customer.email));
  };

  return (
    <>
      <h3>Lista de Clientes</h3>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.email}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.cpf}</td>
              <td>
                <button type="button" onClick={() => handleUpdate(customer)}>
                  Atualizar
                </button>
              </td>
              <td>
                <button type="button">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default CustomerList;
