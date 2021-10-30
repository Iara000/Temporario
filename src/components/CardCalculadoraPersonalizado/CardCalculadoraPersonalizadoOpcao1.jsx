import React from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "../CardCalculadoraPersonalizado/CardCalculadoraPersonalizadoOpcao1.module.css";

const CardCalculadoraPersonalizado_Opcao1 = () => {
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

        <form>
          <span className={styles.frase}>
            Eu ando no meu veículo{" "}
            <input type="text" className={styles.inputkm} /> quilômetros por dia
            durante a semana e <input type="text" className={styles.inputkm} />{" "}
            quilômetros por dia aos finais de semana.
          </span>

          <div className={styles.card_formulario}>
            <div className={styles.linha_texto}>Veículo Elétrico</div>
            <div className={styles.linha_texto}>Veículo a Combustão</div>
            <div className={styles.linha_input}><input type="text" className={styles.input_form} /></div>
            <div className={styles.linha_input}><input type="text" className={styles.input_form} /></div>
            <div className={styles.linha_input}><input type="text" className={styles.input_form} /></div>
            <div className={styles.linha_input}><input type="text" className={styles.input_form} /></div>
            <div className={styles.linha_texto}>Opcional</div>
            <div className={styles.linha_texto}>Opcional</div>
            <div className={styles.linha_input}><input type="text" className={styles.input_form} /></div>
            <div className={styles.linha_input}><input type="text" className={styles.input_form} /></div>
            <div><Button id='calcular'>Calcular</Button></div>
          </div>

        </form>
      </CardCalculadora>
    </div>
  );
};

export default CardCalculadoraPersonalizado_Opcao1;
