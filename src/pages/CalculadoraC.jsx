import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import CardCalculadora from '../components/CardCalculadora/CardCalculadora';
import './Calculadora.css'

const CalculadoraV = () => {
  return (
    <div className="container">
    <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[ {icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},
          {/* {icon: 'date_range', text: 'Veículos cadastrados', },
  {icon: 'date_range', text: 'Meu veículo vs elétrico',}*/}
        ]}
      />
      <CardCalculadora/>
      </div>
  );
}
export default CalculadoraV;