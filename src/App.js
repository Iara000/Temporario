import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', height: '95vh'}}>
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[
          {icon: 'account_box', text: 'Personalizado'},
          {icon: 'date_range', text: 'Veículos cadastrados'},
          {icon: 'date_range', text: 'Meu veículo vs elétrico'}
        ]}
      />

      <Sidebar 
        title="Painel de controle" 
        subtitle="Cadastros" 
        content={[
          {icon: 'date_range', text: 'Administrador'},
          {icon: 'date_range', text: 'Carros elétricos'},
          {icon: 'date_range', text: 'Carros a combustão'}
        ]}
      />
    </div>
  );
}

export default App;
