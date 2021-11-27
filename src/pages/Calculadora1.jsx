import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { CalcPersonalizadaContextProvider } from '../context/calculadoraPersonalizada-context';
import CardCalcCustomForm from '../components/CardCalcCustom/CardCalcCustomForm'


const Calculadora1 = () => {
  return (
    <CalcPersonalizadaContextProvider>
    <div className="container">
    <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
       content={[ {icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},
        {icon: 'date_range', text: 'Veículos cadastrados', path: '/cadastrados'},
        {icon: 'date_range', text: 'Meu veículo vs elétrico', path: '/vseletrico'}
        ]}
      />
      <CardCalcCustomForm/>
      </div>
    </CalcPersonalizadaContextProvider>
  );
}
export default Calculadora1;