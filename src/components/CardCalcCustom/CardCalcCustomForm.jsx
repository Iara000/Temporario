import React, { useContext } from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "./CardCalcCustomForm.module.css";
import CalcPersonalizadaContext from "../../context/calculadoraPersonalizada-context";
import Input from "../Input/Input";
import { useHistory } from "react-router";
import { isEmpty, isNegative } from "../../services/validate";
import AlertContext from "../../context/alert-context";


const CardCalcCustomForm = () => {
  const ctx = useContext(CalcPersonalizadaContext);
  const alertCtx = useContext(AlertContext);
  const history = useHistory();

  const calcularEconomiaHandler = (event) => {
    event.preventDefault();
    const obj = {
      kmSemana: ctx.kmSemana,
      kmFds: ctx.kmFds,
      eficienciaVE: ctx.eficienciaVE,
      eficienciaVC: ctx.eficienciaVC,
      valorCombustivel: ctx.valorCombustivel,
      valorKWh: ctx.valorKWh,
      valorVC: ctx.valorVC,
      valorVE: ctx.valorVE,
    };
    const validate = isEmpty(obj);
    const numberValidate = isNegative(obj);
    if (validate && numberValidate) {
      const results = ctx.calcularEconomia();
      localStorage.setItem("dados_calculadoraPersonalizada", JSON.stringify({obj, results}));
      history.push('/calculadora/personalizado/resultado');
    } else { 
      !numberValidate && alertCtx.alertOpen('Erro', 'Nenhum valor pode ser negativo!')
      !validate && alertCtx.alertOpen('Erro', 'Por favor, preencha todos os campos necessários!')
    }
  }
  
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
            Eu ando no meu veículo
            <Input 
              type="km" 
              placeholder="Km" 
              value={ctx.kmSemana} 
              onChange={(event) => ctx.changeKmSemana(event.target.value)}  
            />
            quilômetros por dia durante a semana e
            <Input 
              type="km" 
              placeholder="Km"
              value={ctx.kmFds} 
              onChange={(event) => ctx.changeKmFds(event.target.value)}  
            />
            quilômetros por dia aos finais de semana.
          </span>

          <div className={styles.card_formulario}>
            <div className={styles.veiculoContainer}>
              <div className={styles.linha_texto}>Veículo Elétrico</div>
              <Input 
                type="number" 
                placeholder="Eficiência do carro elétrico" 
                textHelp= "É o cálculo da autonomia / capacidade da bateria.*"
                subtextHelp="*Dados informados pelo fabricante."
                unidade="Km/kWh"
                value={ctx.eficienciaVE} 
                onChange={(event) => ctx.changeEficienciaVE(event.target.value)}  
              />
              <Input 
                type="number" 
                placeholder="Valor do Kwh local"
                textHelp="Esse dado é encontrado na conta de energia elétrica da sua residência."
                unidade="R$"
                value={ctx.valorKWh} 
                onChange={(event) => ctx.changeValorKWh(event.target.value)}  
              />
              <p className={styles.linha_textoOpcional}>Opcional</p>
              <Input 
                type="number" 
                placeholder="Valor do veiculo elétrico"
                textHelp="Valor médio do veículo, FIPE ou informado pelo fabricante."
                unidade="R$"
                value={ctx.valorVE} 
                onChange={(event) => ctx.changeValorVE(event.target.value)}  
              />
            </div>

            <div className={styles.veiculoContainer}>
              <div className={styles.linha_texto}>Veículo a Combustão</div>
              <Input 
                type="number" 
                placeholder="Média de consumo" 
                unidade="Km/L"
                textHelp="É o calculo de km rodados / litros que são necessários para encher o tanque do veículo novamente"
                value={ctx.eficienciaVC} 
                onChange={(event) => ctx.changeEficienciaVC(event.target.value)}  
              />
              <Input 
                type="number" 
                placeholder="Valor do combustível local"
                textHelp="Valor do combustível nos postos de sua região."
                unidade="R$"
                value={ctx.valorCombustivel} 
                onChange={(event) => ctx.changeValorCombustivel(event.target.value)}  
              />
              <p className={styles.linha_textoOpcional}>Opcional</p>
              <Input 
                type="number" 
                placeholder="Valor do veículo a combustão"
                unidade="R$"
                textHelp="Valor médio do veículo, FIPE ou informado pelo fabricante."
                value={ctx.valorVC} 
                onChange={(event) => ctx.changeValorVC(event.target.value)}  
              />
            </div>
          </div>

          <div className={styles.linha_button}>
            <Button 
              id="calcular" 
              onClick={calcularEconomiaHandler}
            >
              Calcular
            </Button>
          </div>
        </form>
      </CardCalculadora>
    </div>
  );
};

export default CardCalcCustomForm;
