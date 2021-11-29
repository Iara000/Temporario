import { useContext } from 'react';
import AlertContext from '../../context/alert-context';
import classes from './Alert.module.css';

const Alert = () => {
    const alertCtx = useContext(AlertContext);

    return(
        <div className={classes.alertContainer}>
            <div className={classes.titleContainer}>
                <h2 className={classes.title}>{ alertCtx.title }</h2>
                <span className={`material-icons-outlined ${classes.icon}`} onClick={alertCtx.alertClose}>close</span>
            </div>
            <p className={classes.message}>{ alertCtx.message }</p>
        </div>
    )
}

export default Alert;