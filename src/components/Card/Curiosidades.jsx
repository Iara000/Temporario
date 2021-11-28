import React from 'react'
import './Curiosidades.css'
import {Card} from 'react-bootstrap'

const Curiosidades = (props) => {
    let titulos = ['Qual a diferença entre um carro elétrico e um híbrido?', 'Por que os carros elétricos são mais caros que os modelos a combustão?', 
    'A manutenção do carro elétrico é mais cara?', 'Carro elétrico pode dar choque?', 'Carro elétrico pode ir ao lava-rápido ou tomar chuva?',
     'O que fazer se acabar a carga da bateria?'];

function rad(titulos) {
    return (titulos[~~(titulos.length * Math.random())]);
}
return (
<>
  <Card  className= 'card'>
  <h1 className = 'titulo'>Curiosodades</h1>
    <Card.Body>
      <Card.Text>
      <p>{<img src='../images/star.png' alt="Estrela" style={{padding: ' 8px'}}/>}{rad(titulos)}</p>
            {<img src='../images/linha.png' alt="Estrela"/>}
            <p>{<img src='../images/star.png' alt="Estrela" style={{padding: ' 8px'}}/>}{rad(titulos)}</p>
            {<img src='../images/linha.png' alt="Estrela"/>}
            <p>{<img src='../images/star.png' alt="Estrela" style={{padding: ' 8px'}}/>}{rad(titulos)}</p>
            {<img src='../images/linha.png' alt="Estrela"/>}
            <p className= 'footer'>Veja mais</p>
      </Card.Text>
    </Card.Body>
  </Card>
</>
       
)
}
export default Curiosidades