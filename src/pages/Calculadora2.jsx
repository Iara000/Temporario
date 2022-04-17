import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import './Calculadora.css'
import { CalcVeiculosCadastradosContextProvider } from '../context/calculadoraVeiculosCadastrados-context';
import CardCalcVeiculosCadastrados from '../components/CardCalcCustom/CardCalcVeiculosCadastrados';

const Calculadora2 = () => {
  return (
    <CalcVeiculosCadastradosContextProvider>
      <div className="container">
        <Sidebar 
          title="Calculadora" 
          subtitle="Opções" 
          content={[
            {icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},
            {icon: 'date_range', text: 'Veículos cadastrados', path: '/calculadora/veiculos-cadastrados'}
          ]}
        />
        <CardCalcVeiculosCadastrados />
      </div>
    </CalcVeiculosCadastradosContextProvider>
  );
}
export default Calculadora2;