import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Calculadora from './pages/Calculadora';
import Calculadora1 from './pages/Calculadora1';
import Calculadora1_1 from './pages/Calculadora1.1';
import Calculadora2 from './pages/Calculadora2';
import Calculadora2_1 from './pages/Calculadora2.1';
import Curiosidades from './pages/Curiosidades';
import { Glossario } from './pages/Glossario';
import Home from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert/Alert';
import { useContext } from 'react';
import AlertContext from './context/alert-context';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const alertCtx = useContext(AlertContext);

  return (
    <Router>
      <ScrollToTop>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/curiosidades' exact component={Curiosidades}/>
        <Route path='/calculadora' exact component={Calculadora}/>
        <Route path='/calculadora/personalizado' exact component={Calculadora1}/>
        <Route path='/calculadora/personalizado/resultado' exact component={Calculadora1_1}/>
        <Route path='/calculadora/veiculos-cadastrados' exact component={Calculadora2}/>
        <Route path='/calculadora/veiculos-cadastrados/resultado' exact component={Calculadora2_1}/>
        <Route path='/glossario' exact component={Glossario}/>
      </Switch>
      {alertCtx.display && <Alert />}
      <Footer/>
      </ScrollToTop>
    </Router>
  );
}

export default App;
