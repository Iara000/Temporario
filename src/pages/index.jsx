import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Central from '../components/Card/Central';
import Curiosidades from '../components/Card/Curiosidades';
import Noticias from '../components/Card/Noticias';
import './Home.css';

const Home = () => {
    return (
        <>
        <Link to= './calculadora' className= 'Link'>
        <Central text= {<p><font size= '+4'>Calcule a economia de um veículo elétrico</font><br/><br/><small>Carros elétricos costumam ser mais econômicos 
        que carros a gasolina,etanol ou diesel, mas quanto mais econômicos? <br/><br/>Use a calculadora e altere os valores sugeridos para 
        descobrir os benefícios oferecidos ao trocar seu carro a combustão por um veículo elétrico.</small></p>}>
          <p><img src='../images/carro azul.png'/></p>
        </Central>
        </Link>
        <div className= 'PrimeiraFila' >
          <Card  img= {<img src='../images/economi 1.png'  /> }>
           <p>Utilize a calculadora e descubra o quanto pode economizar!</p>
          </Card>
          <Card img= {< img src='../images/charging.png' /> }>
            <p>Veja os veículos elétricos disponíveis no Brasil!</p>
          </Card>
          <Card img= {<img src='../images/recarga.png' /> } >
            <p>Encontre um ponto de recarga!</p>
          </Card>
          </div>
          <div className= "SegundaFila">
            <Link to= './curiosidades' className= "Curiosidade">
          <Card img= 'Curiosidades' >
           <p><Curiosidades/><hr/><br/>
              <Curiosidades/><hr/><br/>
              <Curiosidades/><hr/><br/>
              Veja mais</p>
          </Card>
          </Link>
        <div className= "CardLateral">
        <Noticias titulo= 'O mais acessível e o mais caro'>
        <p><img src='../images/jac.png' height='30'/>JAC E-JS1 
           <br/>
             A partir de R$ 149.900
             <br/>
             <br/>
             <img src='../images/etron.png' height='20'/>Audi e-tron
              <br/>
             A partir de R$ 529.990
           </p>
        </Noticias>
        <Noticias titulo= 'Total de vendas anuais VE'>
        <p><img src='../images/dados.png' height='40'/>
        <img src='../images/grafico-escuro.png' height='70' width='37'style={{margin: '0px 5px'}}/>
        <img src='../images/grafico-claro.png' height='90' width='34' style={{margin: '20px 0px 40px'}}/>
        </p>
        </Noticias>
        </div>
        </div>
        </>
    )
}

export default Home