import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Calculadora from './pages/Calculadora';
import Curiosidades from './pages/Curiosidades';
import Home from './pages/index';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/curiosidades' exact component={Curiosidades}/>
        <Route path='/calculadora' exact component={Calculadora}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

{/*import Resultado from "./components/Resultado/Resultado";
import CardCalculadoraInfoGerais from "./components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais";
import Sidebar from "./components/Sidebar/Sidebar";
import { CalcPersonalizadaContextProvider } from "./context/calculadoraPersonalizada-context";

function App() {
  return (
    <div>
    <CardCalculadoraInfoGerais />
    <CalcPersonalizadaContextProvider>
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
        content={[
          {icon: 'account_box', text: 'Personalizado'},
          {icon: 'date_range', text: 'Veículos cadastrados'},
          {icon: 'date_range', text: 'Meu veículo vs elétrico'}
        ]}
      />
      <Resultado />
      <CardCalculadoraInfoGerais />
    </CalcPersonalizadaContextProvider>
    </div>
  );
}
*/}
