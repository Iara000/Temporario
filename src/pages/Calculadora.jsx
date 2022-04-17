import React  from 'react'
import CardCalculadoraInfoGerais from '../components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais';
import Sidebar from '../components/Sidebar/Sidebar'
import './Calculadora.css'

const Calculadora = () => {
  return (
    <div className="container">
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[
          {icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},
          {icon: 'date_range', text: 'Veículos cadastrados', path: '/calculadora/veiculos-cadastrados'}
        ]}
      />
      <CardCalculadoraInfoGerais />
    </div>
  );
}

export default Calculadora