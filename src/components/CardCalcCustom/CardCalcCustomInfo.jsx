import React from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "./CardCalcCustomInfo.module.css";

const CardCalcCustomInfo = () => {
  return (
    <div>
      <CardCalculadora>
        <div className={styles.titulo}>Calculadora/Personalizado</div>
        <div className={styles.linha_titulo}></div>
        <div className={styles.texto_informativo}>
          Para fazer o cálculo, utilizaremos os informações abaixo. Vamos
          considerar o consumo de combustível de cada veículo, o preço do litro
          do combustível e o do kWh (quilowatt/hora) de eletricidade local. Como
          opcional, insira o valor dos veículos para descobrir em quantos meses
          a diferença de valor é paga com a economia de um carro elétrico!
        </div>

        <span className={styles.frase}>
          Eu ando no meu veículo{" "}
          <input
            type="text"
            className={styles.inputkm}
            placeholder="Km"
            disabled
          />{" "}
          quilômetros por dia durante a semana e{" "}
          <input
            type="text"
            className={styles.inputkm}
            placeholder="Km"
            disabled
          />{" "}
          quilômetros por dia aos finais de semana.
        </span>

        <div className={styles.card_info}>
          <div className={styles.linha_texto}>Veículo Elétrico</div>
          <div className={styles.linha_texto}>Veículo a Combustão</div>
          <div className={styles.dados_info}>
            <h3>Dados informados:</h3>
            <br />
            <p>Eficiência do carro elétrico (Km/Kwh): 6.3 Km/KWh</p>
            <p>Valor do Kwh local: XX.XX</p>
            <p> do veiculo elétrico: R$ 274.000,00</p>
          </div>
          <div className={styles.dados_info}>
            <h3>Dados informados:</h3>
            <br />
            <p>Média de consumo (Km/l): 6.3 Km/KWh</p>
            <p>Valor do combustível local: XX.XX</p>
            <p>Valor do veículo a combustão: R$ 274.000,00</p>
          </div>
        </div>
        <div className={styles.linha_button}>
          <Button id="voltar">Voltar ao início</Button>
        </div>
      </CardCalculadora>
    </div>
  );
};

export default CardCalcCustomInfo;