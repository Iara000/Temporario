import React from 'react'
import './Curiosidades.css'

const Curiosidades = (props) => {
    let titulos = ['Qual a diferença entre um carro elétrico e um híbrido?', 'Por que os carros elétricos são mais caros que os modelos a combustão?', 
    'A manutenção do carro elétrico é mais cara?', 'Carro elétrico pode dar choque?', 'Carro elétrico pode ir ao lava-rápido ou tomar chuva?',
     'O que fazer se acabar a carga da bateria?'];

function rad(titulos) {
    return (titulos[~~(titulos.length * Math.random())]);
}
    return (
        <div className= 'card'>
            <h1 className = 'titulo'>Curiosodades</h1>
            <div>
            <p>{<img src='../images/star.png' style={{padding: ' 8px'}}/>}{rad(titulos)}</p>
            {<img src='../images/linha.png'/>}
            <p>{<img src='../images/star.png' style={{padding: ' 8px'}}/>}{rad(titulos)}</p>
            {<img src='../images/linha.png'/>}
            <p>{<img src='../images/star.png' style={{padding: ' 8px'}}/>}{rad(titulos)}</p>
            {<img src='../images/linha.png'/>}
            <p className= 'footer'>Veja mais</p>
            </div>
        </div>
    )
}

export default Curiosidades