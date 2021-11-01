import React from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "./CardCalcCustomForm.module.css";

const CardCalcCustomForm = () => {
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
        {/* Início do formulário */}
        <form>
          <span className={styles.frase}>
            Eu ando no meu veículo{" "}
            <input type="text" className={styles.inputkm} placeholder="Km" />{" "}
            quilômetros por dia durante a semana e{" "}
            <input type="text" className={styles.inputkm} placeholder="Km" />{" "}
            quilômetros por dia aos finais de semana.
          </span>

          <div className={styles.card_formulario}>
            <div className={styles.linha_texto}>Veículo Elétrico</div>
            <div className={styles.linha_texto}>Veículo a Combustão</div>
            <div>
              <input
                type="text"
                className={styles.input_form}
                placeholder="Eficiência do carro elétrico (Km/Kwh)"
              />{" "}
              <img src="images/help_icon.png" alt="Ajuda" />
            </div>
            <div>
              <input
                type="text"
                className={styles.input_form}
                placeholder="Média de consumo (Km/l)"
              />{" "}
              <img src="images/help_icon.png" alt="Ajuda" />
            </div>
            <div>
              <input
                type="text"
                className={styles.input_form}
                placeholder="Valor do Kwh local"
              />{" "}
              <img src="images/help_icon.png" alt="Ajuda" />
            </div>
            <div>
              <input
                type="text"
                className={styles.input_form}
                placeholder="Valor do combustível local"
              />{" "}
              <img src="images/help_icon.png" alt="Ajuda" />
            </div>
            <div className={styles.linha_texto}>Opcional</div>
            <div className={styles.linha_texto}>Opcional</div>
            <div>
              <input
                type="text"
                className={styles.input_form}
                placeholder="Valor do veiculo elétrico"
              />{" "}
              <img src="images/help_icon.png" alt="Ajuda" />
            </div>
            <div>
              <input
                type="text"
                className={styles.input_form}
                placeholder="Valor do veículo a combustão"
              />{" "}
              <img src="images/help_icon.png" alt="Ajuda" />
            </div>
          </div>
          <div className={styles.linha_button}>
            <Button id="calcular">Calcular</Button>
          </div>
        </form>
      </CardCalculadora>
    </div>
  );
};

export default CardCalcCustomForm;
