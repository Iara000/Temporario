import React from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import styles from "./CardCalculadoraInfoGerais.module.css";

const CardCalculadoraInfoGerais = () => {
  return (
    <div>
      <CardCalculadora>
        <div className={styles.titulo}>Informações gerais</div>
        <div className={styles.linha_titulo}></div>
        <div className={styles.texto_informativo}>
          Nossa calculadora conta com três opções. Para realizar os cálculos
          utilizando dados customizados, escolha a opção “Personalizado”. Para
          escolher e comparar carros elétricos e a combustão de uma lista,
          escolha “Veículos cadastrados. Se desejar comparar seu veículo atual a
          combustão com um veículo elétrico de uma lista, escolha “Meu veículo
          vs elétrico”. As informações dos veículos cadastrados foram retiradas
          dos sites dos fabricantes.
        </div>
        <div className={styles.imagem}><img src='images/imgCalcInfoGerais.png' alt='Calculadora'></img></div>
      </CardCalculadora>
    </div>
  );
};
export default CardCalculadoraInfoGerais;
