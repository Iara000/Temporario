import React, { useContext, useEffect, useState } from "react";
import styles from "./cardInfo.module.css";
import { toMoney } from '../../services/formater';

import CalcVeiculosCadastradosContext from "../../context/calculadoraVeiculosCadastrados-context";


const CardInfo = (props) => {
  const ctx = useContext(CalcVeiculosCadastradosContext);
  const { id_VCSelecionado, id_VESelecionado, veiculosEletricos, veiculosCombustao, valorKWh, valorCombustivel } = ctx;
  const [ VE_selecionado, setVE_selecionado ] = useState({});
  const [ VC_selecionado, setVC_selecionado ] = useState({});
  
  useEffect( () => {
    if (props.veiculo === "eletrico") {
        const ve = veiculosEletricos.find( ve => ve.id == id_VESelecionado );
        setVE_selecionado(ve);
    } else if (props.veiculo === "combustao") {
        const vc = veiculosCombustao.find( vc => vc.id == id_VCSelecionado );
        setVC_selecionado(vc);
    }
  }, []);

  const veiculo = props.veiculo === "eletrico" ? VE_selecionado : VC_selecionado;

  return (
    <section className={styles.section}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={veiculo.img} alt="Veículo" />
        </div>
        <div className={styles.veiculoContainer}>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>Modelo:</p>
                <p className={styles.text}>{veiculo.modelo}</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>Motor:</p>
                <p className={styles.text}>{veiculo.motor} cv</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>Bateria:</p>
                <p className={styles.text}>{veiculo.bateria} KWh</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>Autonomia:</p>
                <p className={styles.text}>{veiculo.autonomia} Km</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>{props.veiculo === "eletrico" ? "Eficiência:" : "Média de consumo (G):"}</p>
                <p className={styles.text}>{veiculo.eficiencia} {props.veiculo === "eletrico" ? "Km/KWh" : "Km/l"}</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>{props.veiculo === "eletrico" ? "Valor do KWh local informado:" : "Valor do combustível local informado:"}</p>
                <p className={styles.text}>{props.veiculo === "eletrico" ? toMoney(valorKWh) : toMoney(valorCombustivel)}</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.subtitle}>A partir de:</p>
                <p className={styles.text}>{toMoney(veiculo.valorVeiculo)}</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.text}>*Verificado em {veiculo.verificado}</p>
            </div>
        </div>

    </section>
  );
};

export default CardInfo;
