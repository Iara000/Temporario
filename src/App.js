// import Resultado from "./components/Resultado/Resultado";
// import CardCalculadoraInfoGerais from "./components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { CalcPersonalizadaContextProvider } from "./context/calculadoraPersonalizada-context";
import CardCalculadoraPersonalizadoOpcao1 from "./components/CardCalculadoraPersonalizado/CardCalculadoraPersonalizadoOpcao1";
//import CardCalculadoraInfoGerais from "./components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais";
function App() {
  return (
    <CardCalculadoraPersonalizadoOpcao1 />
    //<CardCalculadoraInfoGerais />
    // <CalcPersonalizadaContextProvider>
    //   <Sidebar 
    //     title="Calculadora" 
    //     subtitle="Opções" 
    //     content={[
    //       {icon: 'account_box', text: 'Personalizado'},
    //       {icon: 'date_range', text: 'Veículos cadastrados'},
    //       {icon: 'date_range', text: 'Meu veículo vs elétrico'}
    //     ]}
    //   />
    //   <Resultado />
    //   <CardCalculadoraInfoGerais />
    // </CalcPersonalizadaContextProvider>
  );
}

export default App;
