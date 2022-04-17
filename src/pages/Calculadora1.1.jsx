import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { CalcPersonalizadaContextProvider } from '../context/calculadoraPersonalizada-context';
import Resultado from '../components/Resultado/Resultado'
import '../App.css';
import './Calculadora.css'

const Calculadora1_1 = () => {
    return (
      <CalcPersonalizadaContextProvider>
        <div className="container">
          <Sidebar
            title="Calculadora" 
            subtitle="Opções" 
            content={[
              {icon: 'account_box', text: 'Personalizado', path: '/calculadora/personalizado'},
              {icon: 'date_range', text: 'Veículos cadastrados', path: '/calculadora/veiculos-cadastrados'}
            ]}
          />
          <Resultado/>
        </div>
      </CalcPersonalizadaContextProvider>
    );
  }
  export default Calculadora1_1;