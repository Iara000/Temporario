import React from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "./CardCalcCustomInfo.module.css";
import Input from '../Input/Input';
import { toMoney } from "../../services/formater";
import { useHistory } from "react-router";

const CardCalcCustomInfo = () => {
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem("dados_calculadoraPersonalizada"));

  return (
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
          Eu ando no meu veículo
          <Input 
            type="km" 
            placeholder="Km"
            readOnly={true}
            value={data.obj.kmSemana}
          />
          quilômetros por dia durante a semana e
          <Input 
            type="km" 
            placeholder="Km"
            readOnly={true}
            value={data.obj.kmFds}
          />
          quilômetros por dia aos finais de semana.
        </span>

      <div className={styles.card_info}>
        <div className={styles.linha_texto}>Veículo Elétrico</div>
        <div className={styles.linha_texto}>Veículo a Combustão</div>
        <div className={styles.dados_info}>
          <h3>Dados informados:</h3>
          <br />
          <p>Eficiência do carro elétrico: {data.obj.eficienciaVE} Km/kWh</p>
          <p>Valor do Kwh local: {toMoney(data.obj.valorKWh)}</p>
          <p>Valor do veiculo elétrico: {data.obj.valorVE !== "" ? toMoney(data.obj.valorVE) : " - "}</p>
        </div>
        <div className={styles.dados_info}>
          <h3>Dados informados:</h3>
          <br />
          <p>Média de consumo: {data.obj.eficienciaVC} Km/L</p>
          <p>Valor do combustível local: {toMoney(data.obj.valorCombustivel)}</p>
          <p>Valor do veículo a combustão: {data.obj.valorVC !== "" ? toMoney(data.obj.valorVC) : " - "}</p>
        </div>
      </div>
      <div className={styles.linha_button}>
        <Button id="voltar" onClick={() => history.push('/calculadora/personalizado')}>Voltar ao início</Button>
      </div>
    </CardCalculadora>
  );
};

export default CardCalcCustomInfo;