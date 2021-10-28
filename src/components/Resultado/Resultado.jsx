import classes from './Resultado.module.css';
import CardCalculadora from '../CardCalculadora/CardCalculadora';

const Resultado = () => {
    return(
        <CardCalculadora>
            <h2 className={classes.title}>
                Isso é o quanto você pode economizar por ano mudando para um veículo elétrico!
            </h2>
            <div className={classes.result}>
                R$ 3,540
            </div>
            <p className={classes.text}>
                Com a economia, a diferença do valor entre o veículo elétrico e o 
                veículo a combustão é pago em XXX meses com o perfil de uso informado!
            </p>
            <div className={classes.infoContainer}>
                <h3 className={classes.subtitle}>Outras informações:</h3>
                <p className={classes.info}>Quilômetros dirigidos por ano: 11.700 Km</p>

                <h3 className={classes.subtitle}>Veículo elétrico:</h3>
                <p className={classes.info}>kWh usados por ano - 1.950 kWh</p>
                <p className={classes.info}>Custo anual com eletricidade - R$ 1.872</p>

                <h3 className={classes.subtitle}>Veículo a combustão:</h3>
                <p className={classes.info}>Litros usados por ano - 975 litros</p>
                <p className={classes.info}>Custo anual de combustível - R$ 6.727,50</p>
            </div>
            <img className={classes.image} src='images/economy.png' alt='Economia'></img>
        </CardCalculadora>
    )
}

export default Resultado;