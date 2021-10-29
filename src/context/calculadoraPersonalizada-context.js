import React, { useState } from "react";

const CalcPersonalizadaContext = React.createContext({
    info: {
        kmSemana: '',
        kmFds: '',
        eficienciaVE: '',
        eficienciaVC: '',
        valorKWh: '',
        valorCombustivel: '',
        valorVE: '',
        valorVC: '',
    },
    changeKmSemana: () => {},
    changeKmFds: () => {},
    changeEficienciaVC: () => {},
    changeEficienciaVE: () => {},
    changeValorKWh: () => {},
    changeValorCombustivel: () => {},
    changeValorVC: () => {},
    changeValorVE: () => {},
    calcularEconomia: () => {},
})

export const CalcPersonalizadaContextProvider = props => {
    const [info, setInfo] = useState({
        kmSemana: '',
        kmFds: '',
        eficienciaVE: '',
        eficienciaVC: '',
        valorKWh: '',
        valorCombustivel: '',
        valorVE: '',
        valorVC: '',
    });
    const [results, setResults] = useState({
        economiaAnual: '', 
        kmAnual: '', 
        consumo_kWh: '', 
        gasto_kWh: '', 
        consumoLitrosCombustivel: '', 
        gastoCombustivel: '', 
        buyback: ''
    });

    const changeKmSemana = (event) => {
        setInfo((currentState) => {
            return {
                kmSemana: event.target.value,
                ...currentState
            }
        });
    };
    const changeKmFds = (event) => {
        setInfo((currentState) => {
            return {
                kmFds: event.target.value,
                ...currentState
            }
        });
    };
    const changeEficienciaVE = (event) => {
        setInfo((currentState) => {
            return {
                eficienciaVE: event.target.value,
                ...currentState
            }
        });
    };
    const changeEficienciaVC = (event) => {
        setInfo((currentState) => {
            return {
                eficienciaVC: event.target.value,
                ...currentState
            }
        });
    };
    const changeValorKWh = (event) => {
        setInfo((currentState) => {
            return {
                valorKWh: event.target.value,
                ...currentState
            }
        });
    };
    const changeValorCombustivel = (event) => {
        setInfo((currentState) => {
            return {
                valorCombustivel: event.target.value,
                ...currentState
            }
        });
    };
    const changeValorVE = (event) => {
        setInfo((currentState) => {
            return {
                valorVE: event.target.value,
                ...currentState
            }
        });
    };
    const changeValorVC = (event) => {
        setInfo((currentState) => {
            return {
                valorVC: event.target.value,
                ...currentState
            }
        });
    };


    // Função para calculo da economia anual
    const calcularEconomia = () => {
        let kmAnual = calcularKmTotal().toLocaleString('pt-br', {minimumFractionDigits: 0});
        let gastoCombustivel = calcularGastoAnualCombustivel().gastoAnualCombustivel;
        let consumoLitrosCombustivel = calcularGastoAnualCombustivel().litrosCombustivelAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
        let gasto_kWh = calcularGastoAnual_kWh().gastoAnual_kWh;
        let consumo_kWh = calcularGastoAnual_kWh().kWhAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
        let buyback = calcularBuyback(gasto_kWh, gastoCombustivel);
        let economiaAnual = gastoCombustivel - gasto_kWh;

        setResults({
            kmAnual,
            gastoCombustivel,
            consumoLitrosCombustivel,
            gasto_kWh,
            consumo_kWh,
            buyback,
            economiaAnual
        });
    }

    const calcularKmTotal = () => {
        //Levando em consideração 52 semanas no ano, sem contar feriados
        const diasUteis = 260;
        const diasFds = 104;

        //Calculando quilometragem total no ano
        let kmTotal = (info.kmSemana * diasUteis) + (info.kmFds * diasFds);

        return kmTotal;
    }

    const calcularGastoAnualCombustivel = () => {

        let kmAnual = calcularKmTotal();

        //Calculando quantidade de litros de Combustivel consumidos em um ano
        let litrosCombustivelAnual = kmAnual/info.eficienciaVC;
        
        //Calculando gasto em R$ de Combustivel em um ano
        let gastoAnualCombustivel = litrosCombustivelAnual * info.valorCombustivel;

        return {
            gastoAnualCombustivel,
            litrosCombustivelAnual
        };
    }

    const calcularGastoAnual_kWh = () => {

        let kmAnual = calcularKmTotal();

        //Calculando quantidade de kWh consumidos em um ano
        let kWhAnual = kmAnual/info.eficienciaVE;
        
        //Calculando gasto em R$ de kWh em um ano
        let gastoAnual_kWh = kWhAnual * info.valorKWh;

        return {
            gastoAnual_kWh,
            kWhAnual
        }
    }

    const calcularBuyback = (gasto_kWh, gastoCombustivel) => {

        let diferenca = info.valorVE - info.valorVC;

        let economiaMensal = (gastoCombustivel - gasto_kWh)/12;

        let meses = Math.ceil(diferenca/economiaMensal);

        return meses;
    }

    const contextValue = {
        info,
        changeKmSemana,
        changeKmFds,
        changeEficienciaVC,
        changeEficienciaVE,
        changeValorKWh,
        changeValorCombustivel,
        changeValorVC,
        changeValorVE,
        calcularEconomia,
        results
    };

    return(
        <CalcPersonalizadaContext.Provider value={contextValue}>
            {props.children}
        </CalcPersonalizadaContext.Provider>
    )
}

export default CalcPersonalizadaContext;



    