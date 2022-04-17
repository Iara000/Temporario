import React, { useState } from "react";

const CalcVeiculosCadastradosContext = React.createContext({
    veiculosEletricos: "",
    veiculosCombustao: "",
    kmFds: "",
    kmSemana: "",
    valorKWh: "",
    valorCombustivel: "",
    id_VCSelecionado: "",
    id_VESelecionado: "",
    changeKmSemana: (value) => {},
    changeKmFds: (value) => {},
    changeVESelecionado: (value) => {},
    changeVCSelecionado: (value) => {},
    changeValorKWh: (value) => {},
    changeValorCombustivel: (value) => {},
    calcularEconomia: () => {}
});

export const CalcVeiculosCadastradosContextProvider = props => {
    const veiculosEletricos = [
        {
            id: 1,
            img: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/02/mant8263-cr2-e1595345679301.jpg?resize=650,366",
            modelo: "Chevrolet Bolt EV 2020",
            motor: 203,
            bateria: 66,
            autonomia: 416,
            eficiencia: 6.3,
            valorVeiculo: 274000,
            verificado: "10/06/2021"
        },
        {
            id: 2,
            img: "https://motorshow.com.br/wp-content/uploads/sites/2/2021/08/fiat-500e-1-696x429.jpg",
            modelo: "Fiat 500e",
            motor: 150,
            bateria: 40,
            autonomia: 320,
            eficiencia: 5.1,
            valorVeiculo: 150000,
            verificado: "12/05/2020"
        },
        {
            id: 3,
            img: "https://motorshow.com.br/wp-content/uploads/sites/2/2021/09/05-jac-e-js1.jpg",
            modelo: "JAC e-JS1",
            motor: 189,
            bateria: 56,
            autonomia: 420,
            eficiencia: 6.0,
            valorVeiculo: 190000,
            verificado: "08/02/2022"
        },
    ];
    const veiculosCombustao = [
        {
            id: 1,
            img: "https://www.autoo.com.br/fotos/2021/3/1280_960/saveiro_1_22032021_47555_1280_960.jpg",
            modelo: "Saveiro 2022",
            motor: 280,
            bateria: 86,
            autonomia: 359,
            eficiencia: 5.9,
            valorVeiculo: 132000,
            verificado: "25/10/2021"
        },
        {
            id: 2,
            img: "https://www.agoramotor.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/Fiat-Palio-2022-traseira-1024x576.jpg.webp",
            modelo: "Palio 2021",
            motor: 189,
            bateria: 49,
            autonomia: 290,
            eficiencia: 4.8,
            valorVeiculo: 90000,
            verificado: "09/11/2021"
        },
        {
            id: 3,
            img: "https://s2.glbimg.com/yPzhPSnSsFQ9Rk67nnXEhSuZ3GM=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/7/z/POMlDUSAqBucWAr5AlZA/2015-10-15-1590-1-preview.jpg",
            modelo: "Fiat Toro",
            motor: 196,
            bateria: 60,
            autonomia: 389,
            eficiencia: 5.8,
            valorVeiculo: 120000,
            verificado: "10/06/2021"
        },
    ];
    const data = localStorage.getItem("calculadora2_data") 
        ? JSON.parse(localStorage.getItem("calculadora2_data"))
        : "";
    const [kmSemana, setKmSemana] = useState(data == null ? "" : data.kmSemana);
    const [kmFds, setKmFds] = useState(data == null ? "" : data.kmFds);
    const [valorKWh, setValorKWh] = useState(data == null ? "" : data.valorKWh);
    const [valorCombustivel, setValorCombustivel] = useState(data == "" ? "" : data.valorCombustivel);
    const [id_VESelecionado, setIdVESelecionado] = useState(data == "" ? "" : data.id_VESelecionado);
    const [id_VCSelecionado, setIdVCSelecionado] = useState(data == "" ? "" : data.id_VCSelecionado);
    const changeVESelecionado = (value) => setIdVESelecionado(value);
    const changeVCSelecionado = (value) => setIdVCSelecionado(value);
    const changeKmFds = (value) => setKmFds(value);
    const changeKmSemana = (value) => setKmSemana(value);
    const changeValorKWh = (value) => setValorKWh(value);
    const changeValorCombustivel = (value) => setValorCombustivel(value);


    // Função para calculo da economia anual
    const calcularEconomia = () => {
        const vcSelecionado = veiculosCombustao.find( vc => vc.id == id_VCSelecionado );
        const veSelecionado = veiculosEletricos.find( ve => ve.id == id_VESelecionado );

        let kmAnual = calcularKmTotal().toLocaleString('pt-br', {minimumFractionDigits: 0});
        let gastoCombustivel = calcularGastoAnualCombustivel(vcSelecionado).gastoAnualCombustivel;
        let consumoLitrosCombustivel = calcularGastoAnualCombustivel(vcSelecionado).litrosCombustivelAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
        let gasto_kWh = calcularGastoAnual_kWh(veSelecionado).gastoAnual_kWh;
        let consumo_kWh = calcularGastoAnual_kWh(veSelecionado).kWhAnual.toLocaleString('pt-br', {maximumFractionDigits: 0});
        let buyback = calcularBuyback( veSelecionado, vcSelecionado, gasto_kWh, gastoCombustivel);
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

    const calcularGastoAnualCombustivel = (vc) => {

        let kmAnual = calcularKmTotal();
        let eficienciaVC = vc.eficiencia;

        //Calculando quantidade de litros de Combustivel consumidos em um ano
        let litrosCombustivelAnual = kmAnual/eficienciaVC;
        
        //Calculando gasto em R$ de Combustivel em um ano
        let gastoAnualCombustivel = litrosCombustivelAnual * valorCombustivel;

        return {
            gastoAnualCombustivel,
            litrosCombustivelAnual
        };
    }

    const calcularGastoAnual_kWh = (ve) => {

        let kmAnual = calcularKmTotal();
        let eficienciaVE = ve.eficiencia;

        //Calculando quantidade de kWh consumidos em um ano
        let kWhAnual = kmAnual/eficienciaVE;
        
        //Calculando gasto em R$ de kWh em um ano
        let gastoAnual_kWh = kWhAnual * valorKWh;

        return {
            gastoAnual_kWh,
            kWhAnual
        }
    }

    const calcularBuyback = (ve, vc, gasto_kWh, gastoCombustivel) => {

        let diferenca = ve.valorVeiculo - vc.valorVeiculo;

        let economiaMensal = (gastoCombustivel - gasto_kWh)/12;

        let meses = Math.ceil(diferenca/economiaMensal);

        return meses;
    }



    const contextValue = {
        veiculosEletricos,
        veiculosCombustao,
        kmFds,
        kmSemana,
        changeKmFds,
        changeKmSemana,
        valorKWh,
        valorCombustivel,
        changeValorKWh,
        changeValorCombustivel,
        id_VCSelecionado,
        id_VESelecionado,
        changeVESelecionado,
        changeVCSelecionado,
        calcularEconomia
    };

    return(
        <CalcVeiculosCadastradosContext.Provider value={contextValue}>
            {props.children}
        </CalcVeiculosCadastradosContext.Provider>
    )
}

export default CalcVeiculosCadastradosContext;



    