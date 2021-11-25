import React, { useContext } from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "./CardCalcCustomForm.module.css";
import CalcPersonalizadaContext from "../../context/calculadoraPersonalizada-context";
import Input from "../Input/Input";


const CardCalcCustomForm = () => {
  const ctx = useContext(CalcPersonalizadaContext);

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
            <Input type="km" placeholder="Km" />
            quilômetros por dia durante a semana e{" "}
            <Input type="km" placeholder="Km" />
            quilômetros por dia aos finais de semana.
          </span>

          <div className={styles.card_formulario}>
            <div className={styles.veiculoContainer}>
              <div className={styles.linha_texto}>Veículo Elétrico</div>
              <Input 
                type="number" 
                placeholder="Eficiência do carro elétrico (Km/Kwh)" 
                textHelp= "É o cálculo da autonomia / capacidade da bateria.*"
                subtextHelp="*Dados informados pelo fabricante."
              />
              <Input 
                type="number" 
                placeholder="Valor do Kwh local"
                textHelp="Esse dado é encontrado na conta de energia elétrica da sua residência." 
              />
              <p className={styles.linha_textoOpcional}>Opcional</p>
              <Input 
                type="number" 
                placeholder="Valor do veiculo elétrico"
                textHelp="Valor médio do veículo, FIPE ou informado pelo fabricante."
              />
            </div>

            <div className={styles.veiculoContainer}>
              <div className={styles.linha_texto}>Veículo a Combustão</div>
              <Input 
                type="number" 
                placeholder="Média de consumo (Km/l)" 
                textHelp="É o calculo de km rodados / litros que são necessários para encher o tanque do veículo novamente"
              />
              <Input 
                type="number" 
                placeholder="Valor do combustível local"
                textHelp="Valor do combustível nos postos de sua região."
              />
              <p className={styles.linha_textoOpcional}>Opcional</p>
              <Input 
                type="number" 
                placeholder="Valor do veículo a combustão"
                textHelp="Valor médio do veículo, FIPE ou informado pelo fabricante."
              />
            </div>
          </div>

          <div className={styles.linha_button}>
            <Button id="calcular" onClick= 'coletar();'>Calcular</Button>
          </div>
        </form>
      </CardCalculadora>
    </div>
  );
};

export default CardCalcCustomForm;
