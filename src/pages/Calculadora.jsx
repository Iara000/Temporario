import React from 'react'
import Resultado from "./components/Resultado/Resultado";
import CardCalculadoraInfoGerais from "./components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais";
import Sidebar from "./components/Sidebar/Sidebar";
import { CalcPersonalizadaContextProvider } from "./context/calculadoraPersonalizada-context";

const Calculadora = () => {
  return (
    <div>
    <CardCalculadoraInfoGerais />
    <CalcPersonalizadaContextProvider>
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[
          {icon: 'account_box', text: 'Personalizado'},
          {icon: 'date_range', text: 'Veículos cadastrados'},
          {icon: 'date_range', text: 'Meu veículo vs elétrico'}
        ]}
      />
      <Resultado />
      <CardCalculadoraInfoGerais />
    </CalcPersonalizadaContextProvider>
    </div>
  );
}

export default Calculadora;
