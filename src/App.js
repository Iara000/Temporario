import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
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
