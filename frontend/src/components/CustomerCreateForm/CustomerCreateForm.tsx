import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setAddress,
  setCpf,
  setEmail,
  setName,
  setPhone,
  setUpdateMode,
} from "../../redux/slice";

const CustomerCreateForm = () => {
  const { updateMode } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const title = updateMode ? "Atualizar Cliente" : "Cadastrar novo Cliente";
  const buttonLabel = updateMode ? "Atualizar" : "Cadastrar";

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setEmail(event.target.value));

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setName(event.target.value));

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setPhone(event.target.value));

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setAddress(event.target.value));

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setCpf(event.target.value));

  const handleCancel = () => dispatch(setUpdateMode(false));

  return (
    <>
      <h3>{title}</h3>
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
          <tr>
            <td>
              <input type="text" name="email" onChange={handleEmailChange} />
            </td>
            <td>
              <input type="text" name="name" onChange={handleNameChange} />
            </td>
            <td>
              <input type="text" name="phone" onChange={handlePhoneChange} />
            </td>
            <td>
              <input
                type="text"
                name="address"
                onChange={handleAddressChange}
              />
            </td>
            <td>
              <input type="text" name="cpf" onChange={handleCpfChange} />
            </td>
            <td>
              <button type="button">{buttonLabel}</button>
            </td>
            {updateMode && (
              <td>
                <button type="button" onClick={handleCancel}>
                  Cancelar
                </button>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomerCreateForm;
