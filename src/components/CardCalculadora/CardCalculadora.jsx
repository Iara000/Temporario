import React from 'react';
import styles from './CardCalculadora.module.css'

const CardCalculadora = (props) => {
    return (
        <div className={styles.cardCalculadora}>{props.children}</div>
    );
};
export default CardCalculadora;