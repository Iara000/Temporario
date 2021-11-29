import classes from './Resultado.module.css';
import CardCalculadora from '../CardCalculadora/CardCalculadora';
import { toMoney } from '../../services/formater';

const Resultado = () => {
    const data = JSON.parse(localStorage.getItem("dados_calculadoraPersonalizada"));
    
    return(
        <CardCalculadora>
            <h2 className={classes.title}>
                Isso é o quanto você pode economizar por ano mudando para um veículo elétrico!
            </h2>
            <div className={classes.result}>
                {data.results.economiaAnual !== "" ? toMoney(data.results.economiaAnual) : " - "}
            </div>
            <p className={classes.text}>
                Com a economia, a diferença do valor entre o veículo elétrico e o 
                veículo a combustão é pago em {data.results.buyback} meses com o perfil de uso informado!
            </p>
            <div className={classes.infoContainer}>
                <h3 className={classes.subtitle}>Outras informações:</h3>
                <p className={classes.info}>Quilômetros dirigidos por ano: {data.results.kmAnual} Km</p>

                <h3 className={classes.subtitle}>Veículo elétrico:</h3>
                <p className={classes.info}>kWh usados por ano - {data.results.consumo_kWh} kWh</p>
                <p className={classes.info}>Custo anual com eletricidade - {toMoney(data.results.gasto_kWh)}</p>

                <h3 className={classes.subtitle}>Veículo a combustão:</h3>
                <p className={classes.info}>Litros usados por ano - {data.results.consumoLitrosCombustivel} litros</p>
                <p className={classes.info}>Custo anual de combustível - {toMoney(data.results.gastoCombustivel)}</p>
            </div>
            <img className={classes.image} src='/images/economy.png' alt='Economia'></img>
        </CardCalculadora>
    )
}

export default Resultado;