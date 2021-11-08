import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { CalcPersonalizadaContextProvider } from '../context/calculadoraPersonalizada-context';
import CardCalcCustomForm from '../components/CardCalcCustom/CardCalcCustomForm'
import CardCalculadora from '../components/CardCalculadora/CardCalculadora';


const CalculadoraV = () => {
  return (
    <div style={{display: 'flex'}}>
    <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
       content={[ {icon: 'account_box', text: 'Personalizado', path: './personalizado'},
        {icon: 'date_range', text: 'Veículos cadastrados', path: './cadastrados'},
        {icon: 'date_range', text: 'Meu veículo vs elétrico', path: './vseletrico'}
        ]}
      />
      <CardCalculadora/>
      </div>
  );
}
export default CalculadoraV;