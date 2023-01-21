import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setAddress,
  setCpf,
  setEmail,
  setName,
  setPhone,
  setUpdateMode,
} from "../../redux/slice";
import InputMask from "react-input-mask";

const CustomerCreateForm = () => {
  const { updateMode, cpf, phone } = useAppSelector((state) => state.app);
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
              <InputMask
                mask="(99) 9 9999-9999"
                value={phone}
                onChange={handlePhoneChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="address"
                onChange={handleAddressChange}
              />
            </td>
            <td>
              <InputMask
                mask="999.999.999-99"
                type="text"
                name="cpf"
                value={cpf}
                onChange={handleCpfChange}
              />
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
