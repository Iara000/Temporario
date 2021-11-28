import React from "react";
import styles from "./CardHome.module.css";

const CardHome = () => {
  return (
    <div className={styles.card_home}>
      <div className={styles.card_home_texto}>
        <h1>Calcule a economia de um veículo elétrico</h1>
        <p>
          Carros elétricos costumam ser mais econômicos que carros a gasolina,
          etanol ou diesel, mas quanto mais econômicos?
        </p>
        <p>
          Use a calculadora e altere os valores sugeridos para descobrir os
          benefícios oferecidos ao trocar seu carro a combustão por um veículo
          elétrico.
        </p>
      </div>
      <div className={styles.card_home_image}>
        <img src="./images/carro azul.png" alt="Carro elétrico" />
      </div>
    </div>
  );
};

export default CardHome;
