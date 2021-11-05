import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Calculadora from './pages/Calculadora';
import Calculadora1 from './pages/Calculadora1';
import CalculadoraV from './pages/CalculadoraC';
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
        <Route path='/personalizado' exact component={Calculadora1}/>
        <Route path='/cadastrados' exact component={CalculadoraV}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
