import React  from 'react'
import CardCalculadoraInfoGerais from '../components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais';
import EmBreve from '../components/EmBreve/EmBreve';
import Sidebar from '../components/Sidebar/Sidebar'
import './Calculadora.css'

const Calculadora = () => {
  return (
    <div className="container">
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={ [{icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},]}
      />
    <CardCalculadoraInfoGerais />
      </div>
  
  );
}

export default Calculadora