import React from 'react'
import Noticias from '../components/Card/Noticias';

const Curiosidades = () => {
    return (
        <>
         <Noticias titulo= {<font size='+2'><b>Carro elétrico: 6 dúvidas muito comuns que todo mundo tem sobre ele</b></font>}>
          <ol>
             <br/><br/>
              <li> <b>Qual a diferença entre um carro elétrico e um híbrido?</b> <br/><br/>
              O carro elétrico, como o nome já diz, é movido apenas por eletricidade. Ele pode ter um ou mais motores, 
              que dependem da energia armazenada em baterias, geralmente de íons de lítio, para funcionar. 
              Já o híbrido combina um propulsor elétrico e outro a combustão. <br/><br/> Esse tipo de carro possui uma 
              central eletrônica que gerencia qual dos motores traciona as rodas. Dependendo da condição de uso, o 
              híbrido pode rodar apenas com eletricidade, para economizar combustível, apenas com o propulsor térmico, 
              em prol do desempenho, ou com uma combinação de ambos. <br/><br/>Quando a carga da bateria está baixa em um 
              veículo híbrido, o motor a combustão é ligado para funcionar como gerador, energizando novamente as baterias.
             </li>
             <br/><br/>
             <li><b>Por que os carros elétricos são mais caros que os modelos a combustão?</b><br/><br/>Os carros elétricos são dotados 
                 de tecnologias recentes, que demandam complexos processos de desenvolvimento. As baterias, em especial, 
                 ainda possuem um custo muito elevado.<br/><br/>Com o avanço dos recursos e os ganhos de escala com o aumento da 
                 produção nos últimos anos, aos poucos, os elétricos vêm se aproximando dos preços dos carros a combustão.
             </li>
             <br/><br/>
              <li><b>A manutenção do carro elétrico é mais cara?</b><br/><br/>Embora sejam mais caros, os carros elétricos 
              são mais baratos de manter ao longo da vida útil, uma vez que eles possuem menos peças e não necessitam de 
              componentes que são essenciais aos modelos a combustão, como embreagem, velas de ignição, óleo lubrificante 
              e fluido de arrefecimento do motor.<br/><br/>Por exemplo: as revisões até 60 mil km do JAC T40 Plus 1.6 CVT (R$ 94.490) 
              custam R$ 5.740. O mesmo plano de manutenção da variante elétrica do SUV, a iEV40 (R$ 225.900), sai por R$ 739,
              40.
              </li>
              <br/><br/>
              <li> <b>Carro elétrico pode dar choque?</b><br/><br/>Não. Os carros elétricos são desenvolvidos para não oferecer
               risco aos seus usuários, da mesma forma que o projeto de um veículo a combustão atual é criado de modo a 
               minimizar qualquer chance de incêndio.<br/><br/>A estrutura desses veículos é construída de forma que as 
               baterias e os componentes elétricos fiquem isolados. Além disso, um dispositivo corta a corrente elétrica 
               em caso de acidente ou pane.
               </li>
               <br/><br/>
              <li><b>Carro elétrico pode ir ao lava-rápido ou tomar chuva?</b><br/><br/>Claro. Assim como nos carros a combustão,
               a parte externa dos elétricos pode ter contato com a água. A cabine, o motor, as baterias e os sistemas 
               elétricos são totalmente selados, permitindo que o veículo seja utilizado e lavado normalmente.
               </li>
               <br/><br/>
               <li><b>O que fazer se acabar a carga da bateria?</b><br/><br/>O mesmo que se deve fazer quando um carro a 
              combustão fica sem gasolina: empurrá-lo para um local seguro e sinalizado com o triângulo de segurança. 
              Para isso, é necessário destravar a transmissão (deixando-a em N ou Neutro) para liberar o movimento das 
              rodas. O manual do proprietário orienta esse processo de acordo com cada modelo. Depois disso, 
              o motorista deve chamar socorro para rebocar ou recarregar o veículo.
              </li>
          </ol>
                  </Noticias>
</>
    )
}

export default Curiosidades
