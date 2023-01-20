import { useEffect, useState } from "react";
import { getDogImgUrl } from "../../services/randomDog";
import styles from "./randomDog.module.css";

const RandomDog = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const fetchDog = async () => {
      setUrl(await getDogImgUrl());
    };

    fetchDog();
  }, []);

  const handleRefresh = async () => setUrl(await getDogImgUrl());

  return (
    <div>
      <button type="button" onClick={handleRefresh}>
        Atualizar
      </button>
      <section>
        <img src={url} alt="Random Dog" className={styles.dog_image} />
      </section>
    </div>
  );
};

export default RandomDog;
