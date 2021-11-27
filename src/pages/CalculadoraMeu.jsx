import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import CardCalculadora from '../components/CardCalculadora/CardCalculadora';


const CalculadoraV = () => {
  return (
    <div className="container">
    <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[ {icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},
          {icon: 'date_range', text: 'Veículos cadastrados', path: './cadastrados'},
          {icon: 'date_range', text: 'Meu veículo vs elétrico', path: './vseletrico'}
        ]}
      />
      <CardCalculadora/>
      </div>
  );
}
export default CalculadoraV;