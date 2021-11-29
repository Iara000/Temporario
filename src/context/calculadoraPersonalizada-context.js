import React, { useState } from "react";

const CalcPersonalizadaContext = React.createContext({
    kmSemana: '',
    kmFds: '',
    eficienciaVE: '',
    eficienciaVC: '',
    valorKWh: '',
    valorCombustivel: '',
    valorVE: '',
    valorVC: '',
    changeKmSemana: (value) => {},
    changeKmFds: (value) => {},
    changeEficienciaVC: (value) => {},
    changeEficienciaVE: (value) => {},
    changeValorKWh: (value) => {},
    changeValorCombustivel: (value) => {},
    changeValorVC: (value) => {},
    changeValorVE: (value) => {},
    calcularEconomia: () => {},
})

export const CalcPersonalizadaContextProvider = props => {
    const data = localStorage.getItem("dados_calculadoraPersonalizada") 
        ? JSON.parse(localStorage.getItem("dados_calculadoraPersonalizada"))
        : "";
    const [kmSemana, setKmSemana] = useState(data === "" ? "" : data.obj.kmSemana);
    const [kmFds, setKmFds] = useState(data === "" ? "" : data.obj.kmFds);
    const [eficienciaVE, setEficienciaVE] = useState(data === "" ? "" : data.obj.eficienciaVE);
    const [eficienciaVC, setEficienciaVC] = useState(data === "" ? "" : data.obj.eficienciaVC);
    const [valorKWh, setValorKWh] = useState(data === "" ? "" : data.obj.valorKWh);
    const [valorCombustivel, setValorCombustivel] = useState(data === "" ? "" : data.obj.valorCombustivel);
    const [valorVE, setValorVE] = useState(data === "" ? "" : data.obj.valorVE);
    const [valorVC, setValorVC] = useState(data === "" ? "" : data.obj.valorVC);

    const changeKmSemana = (value) => setKmSemana(value);
    const changeKmFds = (value) => setKmFds(value);
    const changeEficienciaVE = (value) => setEficienciaVE(value);
    const changeEficienciaVC = (value) => setEficienciaVC(value);
    const changeValorKWh = (value) => setValorKWh(value);
    const changeValorCombustivel = (value) => setValorCombustivel(value);
    const changeValorVE = (value) => setValorVE(value);
    const changeValorVC = (value) => setValorVC(value);


    // Função para calculo da economia anual
    const calcularEconomia = () => {
        let kmAnual = calcularKmTotal().toLocaleString('pt-br', {minimumFractionDigits: 0});
        let gastoCombustivel = calcularGastoAnualCombustivel().gastoAnualCombustivel;
        let consumoLitrosCombustivel = calcularGastoAnualCombustivel().litrosCombustivelAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
        let gasto_kWh = calcularGastoAnual_kWh().gastoAnual_kWh;
        let consumo_kWh = calcularGastoAnual_kWh().kWhAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
        let buyback = calcularBuyback(gasto_kWh, gastoCombustivel);
        let economiaAnual = gastoCombustivel - gasto_kWh;

        return {
            kmAnual,
            gastoCombustivel,
            consumoLitrosCombustivel,
            gasto_kWh,
            consumo_kWh,
            buyback,
            economiaAnual
        };
    }

    const calcularKmTotal = () => {
        //Levando em consideração 52 semanas no ano, sem contar feriados
        const diasUteis = 260;
        const diasFds = 104;

        //Calculando quilometragem total no ano
        let kmTotal = (kmSemana * diasUteis) + (kmFds * diasFds);

        return kmTotal;
    }

    const calcularGastoAnualCombustivel = () => {

        let kmAnual = calcularKmTotal();

        //Calculando quantidade de litros de Combustivel consumidos em um ano
        let litrosCombustivelAnual = kmAnual/eficienciaVC;
        
        //Calculando gasto em R$ de Combustivel em um ano
        let gastoAnualCombustivel = litrosCombustivelAnual * valorCombustivel;

        return {
            gastoAnualCombustivel,
            litrosCombustivelAnual
        };
    }

    const calcularGastoAnual_kWh = () => {

        let kmAnual = calcularKmTotal();

        //Calculando quantidade de kWh consumidos em um ano
        let kWhAnual = kmAnual/eficienciaVE;
        
        //Calculando gasto em R$ de kWh em um ano
        let gastoAnual_kWh = kWhAnual * valorKWh;

        return {
            gastoAnual_kWh,
            kWhAnual
        }
    }

    const calcularBuyback = (gasto_kWh, gastoCombustivel) => {

        let diferenca = valorVE - valorVC;

        let economiaMensal = (gastoCombustivel - gasto_kWh)/12;

        let meses = Math.ceil(diferenca/economiaMensal);

        return meses;
    }

    const contextValue = {
        kmSemana,
        kmFds,
        eficienciaVE,
        eficienciaVC,
        valorCombustivel,
        valorKWh,
        valorVC,
        valorVE,
        changeKmSemana,
        changeKmFds,
        changeEficienciaVC,
        changeEficienciaVE,
        changeValorKWh,
        changeValorCombustivel,
        changeValorVC,
        changeValorVE,
        calcularEconomia,
    };

    return(
        <CalcPersonalizadaContext.Provider value={contextValue}>
            {props.children}
        </CalcPersonalizadaContext.Provider>
    )
}

export default CalcPersonalizadaContext;



    