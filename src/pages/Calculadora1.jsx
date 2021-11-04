import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { CalcPersonalizadaContextProvider } from '../context/calculadoraPersonalizada-context';
import CardCalcCustomForm from '../components/CardCalcCustom/CardCalcCustomForm'


const Calculadora1 = () => {
  return (
    <CalcPersonalizadaContextProvider>
    <div style={{display: 'flex'}}>
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[
          {icon: 'account_box', text: 'Personalizado'},
          {icon: 'date_range', text: 'Veículos cadastrados'},
          {icon: 'date_range', text: 'Meu veículo vs elétrico'}
        ]}
      />
      <CardCalcCustomForm/>
      </div>
    </CalcPersonalizadaContextProvider>
  );
}
export default Calculadora1;