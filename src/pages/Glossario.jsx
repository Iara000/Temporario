import React from 'react'
import './Curiosidade.css'

export const Glossario = () => {
    return (
            <div className= 'painel'>
         <h1 className= 'titulo'>{<font size='+2'><b>Alguns termos necessários para navegar o mercado de veículos elétricos:</b></font>}</h1>
          <ul className= 'lista'>
          <br/><br/>
              <li><b>BEV (battery eletric vehicle) ou VE (Veículo elétrico)</b><br/><br/>
              BEV ou veículo elétrico movido a bateria, também podendo ser referenciado pelo termo genérico VE (veículo elétrico). 
              São os automóveis totalmente elétricos, desprovidos de motor a combustão.
              </li>
              <br/>
              <li><b> HEV (Hybrid Eletric Vehicle)</b><br/><br/>
              São os veículos que apresentam em paralelo um motor elétrico, cuja energia é suprida por uma 
              bateria e um motor à combustão convencional, abastecido por combustíveis líquidos ou gasosos (fósseis ou renováveis). 
              Possuem uma pequena bateria de tração, carregada através de frenagem regenerativa por meio do motor à combustão.
              Existem automóveis híbridos em série, em paralelo, mistos, plug-in e flex.
               </li>
               <br/>
               <li><b>Zero emission</b><br/><br/>
               Uma das maiores vantagens do carro elétrico é ser zero emission (emissão zero), ou seja, não despeja gases tóxicos, como o CO2, 
               no meio ambiente enquanto está em movimento. A emissão de gás carbônico acontece apenas durante sua fabricação, 
               mas em área limitada. O único dano à atmosfera causado pelo carro elétrico é o atrito dos pneus com o asfalto.
              </li>
               <br/>
               <li> <b>Quilowatt-hora (kWh)</b> <br/><br/>
              Unidade de energia elétrica equivalente a mil watts de potência transferidos em uma hora. 
              Normalmente, a densidade energética das baterias dos VEs é medida em quilowatts-hora.
             </li>
            <br/> 
             <li><b>Eletroposto</b><br/><br/>
             Ponto de carregamento da bateria dos carros elétricos instalado em locais públicos, como rodovias, shopping centers, supermercados 
             e postos de serviço. Hoje, existem, aproximadamente, 750 eletropostos, no Brasil.
             </li>
             <br/>
              <li> <b>Eletrovia</b><br/><br/>
              Corredor rodoviário que oferece, ao longo de sua extensão, uma vasta rede de postos para a recarga da bateria. 
              No Brasil, as rodovias BR-050 (que liga Brasília a Goiânia) e BR-277 (Paranaguá e Foz do Iguaçu, no Paraná) 
              são dois exemplos de estradas que já possuem essa infraestrutura. A instalação dos pontos de recarga vem, 
              geralmente, de investimentos de empresas do setor de energia em parceria com montadoras.
               </li>
              <br/>
               <li><b>Wallbox</b><br/><br/>
               Nome dado por algumas montadoras ao equipamento de recarga doméstica, de 11 kW ou 22 kW. 
               Custa entre R$ 3 mil e R$ 7 mil, dependendo do modelo. 
               A instalação é feita por empresas de fornecimento de energia, homologadas pelas montadoras. 
              </li>
              <br/>
              <li><b>BMS(Sistema de gerenciamento de bateria)</b><br/><br/>
              Sistema eletrônico (hardware + software) que gerencia os parâmetros de funcionamento de conjuntos de baterias, como estado de 
              carga, “saúde” da bateria, limites máximo e mínimo de energia, e temperatura, controlando o fluxo de corrente elétrica 
              que entra e sai das baterias.
              </li>
              <br/>
              <li><b>Frenagem regenerativa</b><br/><br/>
              Processo no qual a energia cinética do veículo, que seria dissipada na forma de calor através do sistema de freio mecânico, 
              é capturada e convertida em energia elétrica através do motor de tração, atuando como gerador, por fim sendo armazenada 
              na bateria.
              </li>
              <br/>
               <li><b>Cartão RFID (Radio Frequency Identification)</b><br/><br/>
               Usando a mesma tecnologia usada em cartões de viagem de transporte público, esses cartões são usados por muitos pontos de 
               carregamento a para permitir o acesso ao carregamento de EV.
              </li>
              <br/>
              <li><b>Padrão aplicativo</b><br/><br/>
              Recarregar o VE sem os cartões RFID, usando um aplicativo de celular no seu lugar para encontrar um ponto de carregamento 
              e iniciar a cobrança. 
              </li>
              <br/>
              <li><b>Pagamento sem contato</b><br/><br/>
              Disponível em alguns carregadores rápidos é possível iniciar e pagar a sua sessão de cobrança com o toque do seu cartão de 
              crédito / débito sem contato com o eletroposto.
              </li>
          </ul>
                  
</div>
        
    )
}
