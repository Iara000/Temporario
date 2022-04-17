import classes from './Resultado.module.css';
import CardCalculadora from '../CardCalculadora/CardCalculadora';
import { toMoney } from '../../services/formater';
import { useHistory } from "react-router-dom";

const Resultado = () => {
    const history = useHistory();
    const calc2 = history.location.pathname === '/calculadora/veiculos-cadastrados/resultado';
    let data;

    if (calc2) 
        data = JSON.parse(localStorage.getItem("dados_calculadoraVeiculosCadastrados"));
    else 
        data = JSON.parse(localStorage.getItem("dados_calculadoraPersonalizada"));
    
    
    return(
        <CardCalculadora>
            <h2 className={classes.title}>
                Isso é o quanto você pode economizar por ano mudando para um veículo elétrico!
            </h2>
            <div className={classes.result}>
                {calc2
                    ? data.economiaAnual !== "" ? toMoney(data.economiaAnual) : " - "
                    : data.results.economiaAnual !== "" ? toMoney(data.results.economiaAnual) : " - "
                }
            </div>
            <p className={classes.text}>
                Com a economia, a diferença do valor entre o veículo elétrico e o 
                veículo a combustão é pago em {calc2 ? data.buyback : data.results.buyback} meses com o perfil de uso informado!
            </p>
            <div className={classes.infoContainer}>
                <h3 className={classes.subtitle}>Outras informações:</h3>
                <p className={classes.info}>Quilômetros dirigidos por ano: {calc2 ? data.kmAnual : data.results.kmAnual} Km</p>

                <h3 className={classes.subtitle}>Veículo elétrico:</h3>
                <p className={classes.info}>kWh usados por ano - {calc2 ? data.consumo_kWh : data.results.consumo_kWh} kWh</p>
                <p className={classes.info}>Custo anual com eletricidade - {calc2 ? toMoney(data.gasto_kWh) : toMoney(data.results.gasto_kWh)}</p>

                <h3 className={classes.subtitle}>Veículo a combustão:</h3>
                <p className={classes.info}>Litros usados por ano - {calc2 ? data.consumoLitrosCombustivel : data.results.consumoLitrosCombustivel} litros</p>
                <p className={classes.info}>Custo anual de combustível - {calc2 ? toMoney(data.gastoCombustivel) : toMoney(data.results.gastoCombustivel)}</p>
            </div>
            <img className={classes.image} src='/images/economy.png' alt='Economia'></img>
        </CardCalculadora>
    )
}

export default Resultado;