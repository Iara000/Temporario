import React, { useContext, useEffect, useState } from "react";
import CardCalculadora from "../CardCalculadora/CardCalculadora";
import Button from "../Button/Button";
import styles from "./CardCalcVeiculosCadastrados.module.css";
import Input from "../Input/Input";
import CalcVeiculosCadastradosContext from "../../context/calculadoraVeiculosCadastrados-context";
import CardInfo from "./cardInfo";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/alert-context";


const CardCalcVeiculosCadastrados = () => {
  const history = useHistory();
  const ctx = useContext(CalcVeiculosCadastradosContext);
  const alertCtx = useContext(AlertContext);
  const [ dadosVE, setDadosVE ] = useState([]);
  const [ dadosVC, setDadosVC ] = useState([]);
  const [ secondStep, setSecondStep ] = useState(false);
  const [ goBack, setGoBack ] = useState(false);

  const { 
    veiculosCombustao, 
    veiculosEletricos,
    kmFds,
    kmSemana,
    changeKmFds,
    changeKmSemana,
    valorKWh,
    valorCombustivel,
    changeValorKWh,
    changeValorCombustivel,
    id_VESelecionado,
    id_VCSelecionado,
    changeVCSelecionado,
    changeVESelecionado,
    calcularEconomia
  } = ctx;

  const preparandoDados = () => {
    const selectVC = veiculosCombustao.map( veiculo => {
        return { value: veiculo.id, label: veiculo.modelo }
    });

    const selectVE = veiculosEletricos.map( veiculo => {
        return { value: veiculo.id, label: veiculo.modelo }
    });

    setDadosVC(selectVC);
    setDadosVE(selectVE);
  };

  const nextStep = (event) => {
    event.preventDefault();
    if (kmFds != "" && kmSemana != "" && id_VCSelecionado != "" && id_VESelecionado != "" &&  valorKWh !== "" && valorCombustivel != "") {
      localStorage.setItem("calculadora2_data", JSON.stringify({
        kmFds,
        kmSemana,
        valorKWh,
        valorCombustivel,
        id_VESelecionado,
        id_VCSelecionado
      }))
      setSecondStep(true);
      localStorage.setItem("calculadora2_step2", true);
    } else {
      alertCtx.alertOpen('Aviso', 'Todos os campos devem estar preenchidos!')
    }
  };

  const firstStep = (event) => {
    event.preventDefault();
    setSecondStep(false);
    localStorage.setItem("calculadora2_step2", false);
  };

  const calcular = (event) => {
    event.preventDefault();
    const data = calcularEconomia();
    localStorage.setItem("dados_calculadoraVeiculosCadastrados", JSON.stringify(data));
    history.push('/calculadora/veiculos-cadastrados/resultado');
  }

  useEffect( () => {
    preparandoDados();
    setSecondStep(JSON.parse(localStorage.getItem("calculadora2_step2")));
    if (history.location.pathname === '/calculadora/veiculos-cadastrados/resultado')
      setGoBack(true)
    else 
      setGoBack(false)
  }, []);

  return (
    <div>
      <CardCalculadora>
        <div className={styles.titulo}>Calculadora/Ve??culos cadastrados</div>
        <div className={styles.linha_titulo}></div>
        <div className={styles.texto_informativo}>
          Para fazer o c??lculo, selecione os ve??culos desejados. Vamos
          considerar o pre??o do litro do combust??vel e o do kWh (quilowatt/hora) 
          de eletricidade local. No final ser?? informado em quantos meses
          a diferen??a de valor dos modelos ?? paga com a economia de um carro el??trico!
        </div>
        
        <form>
          <span className={styles.frase}>
            Eu ando no meu ve??culo
            <Input 
              type="km" 
              placeholder="Km" 
              value={kmSemana} 
              onChange={(event) => changeKmSemana(event.target.value)}  
              readOnly={goBack ? true : false}
            />
            quil??metros por dia durante a semana e
            <Input 
              type="km" 
              placeholder="Km"
              value={kmFds} 
              onChange={(event) => changeKmFds(event.target.value)}  
              readOnly={goBack ? true : false}
            />
            quil??metros por dia aos finais de semana.
          </span>
          

          {secondStep
            ?
              <div className={styles.card_formulario}>
                <div className={styles.veiculoContainer}>
                  <div className={styles.linha_texto}>Ve??culo El??trico</div>
                  <CardInfo veiculo="eletrico" />
                </div>
                <div className={styles.veiculoContainer}>
                  <div className={styles.linha_texto}>Ve??culo a Combust??o</div>
                  <CardInfo veiculo="combustao" />
                </div>
              </div>
            :
              <div className={styles.card_formulario}>
                <div className={styles.veiculoContainer}>
                  <div className={styles.linha_texto}>Ve??culo El??trico</div>
                  <Input 
                    type="select" 
                    placeholder="Escolha um modelo"
                    value={id_VESelecionado} 
                    data={dadosVE}
                    onChange={changeVESelecionado}  
                  />
                  <Input 
                    type="number" 
                    placeholder="Valor do KWh local"
                    textHelp="Esse dado ?? encontrado na conta de energia el??trica da sua resid??ncia."
                    unidade="R$"
                    value={valorKWh} 
                    onChange={(event) => changeValorKWh(event.target.value)}  
                  />
                </div>

                <div className={styles.veiculoContainer}>
                  <div className={styles.linha_texto}>Ve??culo a Combust??o</div>
                  <Input 
                    type="select" 
                    placeholder="Escolha um modelo" 
                    value={id_VCSelecionado}
                    data={dadosVC}
                    onChange={changeVCSelecionado}  
                  />
                  
                  <Input 
                    type="number" 
                    placeholder="Valor do combust??vel local"
                    unidade="R$"
                    textHelp="Valor do combust??vel nos postos de sua regi??o."
                    value={valorCombustivel} 
                    onChange={(event) => changeValorCombustivel(event.target.value)}  
                  />
                </div>
              </div>
          }

          {secondStep
            ?
              <div className={styles.btnContainer}>
                {goBack
                  ?
                    <div className={styles.btnBackContainer}>
                      <Button 
                        id="voltar" 
                        onClick={() => {
                          localStorage.removeItem("calculadora2_step2");
                          localStorage.removeItem("calculadora2_data");
                          localStorage.removeItem("dados_calculadoraVeiculosCadastrados");
                          history.replace('/calculadora/veiculos-cadastrados');
                        }}
                      >
                        Voltar ao in??cio
                      </Button>
                    </div>
                  :
                    <div className={styles.btnContainer}>
                      <div className={styles.linha_button1}>
                        <Button 
                          id="calcular" 
                          onClick={firstStep}
                        >
                          Etapa Anterior
                        </Button>
                      </div>
                      <div className={styles.linha_button2}>
                        <Button 
                          id="calcular" 
                          onClick={calcular}
                        >
                          Calcular
                        </Button>
                      </div>
                    </div>
                }
              </div>
            :
              <div className={styles.linha_button}>
                    <Button 
                      id="calcular" 
                      onClick={nextStep}
                    >
                      Pr??xima etapa
                    </Button>
              </div>
          }
        </form>
      </CardCalculadora>
    </div>
  );
};

export default CardCalcVeiculosCadastrados;
