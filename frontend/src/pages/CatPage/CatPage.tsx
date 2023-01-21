import { useState } from "react";
import InputMask from "react-input-mask";

const CatPage = () => {
  const [code, setCode] = useState<number>(200);
  const [httpCode, setHttpCode] = useState<number>(200);
  const [error, setError] = useState<string>("");
  const url = `https://http.cat/${httpCode}.jpg`;

  const handleHttpCode = () => {
    if (code < 100 || code > 599) {
      setError("Número inválido.");
      return;
    }
    setHttpCode(code);
  };

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(+event.target.value);

  return (
    <div>
      <h1>{httpCode}</h1>
      <div>{error && <span>Error: {error}</span>}</div>
      <input type="text" value={code} onChange={handleText} />
      <button type="button" onClick={handleHttpCode}>
        Buscar
      </button>
      <section>
        <img src={url} alt="Imagem HttpCat" />
      </section>
    </div>
  );
};

export default CatPage;
