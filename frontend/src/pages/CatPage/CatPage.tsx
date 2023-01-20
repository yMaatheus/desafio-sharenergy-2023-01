import { useState } from "react";

const CatPage = () => {
  const [httpCode, setHttpCode] = useState<number>(200);
  const url = `https://http.cat/${httpCode}.jpg`;

  const handleHttpCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const code = +event.target.value;
    if (code < 100 || code > 599) {
      return;
    }
    setHttpCode(+event.target.value);
  };

  return (
    <div>
      <h1>{httpCode}</h1>
      <input
        type="number"
        name="code"
        min="100"
        max="599"
        value={httpCode}
        onChange={handleHttpCode}
      />
      <section>
        <img src={url} alt="Imagem HttpCat" />
      </section>
    </div>
  );
};

export default CatPage;
