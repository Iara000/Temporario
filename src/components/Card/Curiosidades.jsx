import React from 'react'

const Curiosidades = () => {
    let titulos = ['Qual a diferença entre um carro elétrico e um híbrido?', 'Por que os carros elétricos são mais caros que os modelos a combustão?', 
    'A manutenção do carro elétrico é mais cara?', 'Carro elétrico pode dar choque?', 'Carro elétrico pode ir ao lava-rápido ou tomar chuva?',
     'O que fazer se acabar a carga da bateria?'];

function rad(titulos) {
    return (titulos[~~(titulos.length * Math.random())]);
}
    return (
        <div>
            <p>
            {<img src='../images/star.png' style={{padding: ' 8px 40px'}}/>}{rad(titulos)}
            </p>
        </div>
    )
}

export default Curiosidades
