import React, { useState } from 'react'
import styles from './Ajuda.module.css'

const Ajuda = props => {
        const [display, setDisplay] = useState(false);

        const showHelp = () => setDisplay(true);
        const closeHelp = () => setDisplay(false);

        return(
                <div className={styles.Ajuda}>
                        <img 
                                src="images/help_icon.png" 
                                alt="Ajuda" 
                                className={styles.imagem} 
                                onMouseOver={showHelp}
                                onMouseOut={closeHelp}
                        />
                        <p className={`${display ? styles.texto : styles.invisible}`}>
                                {props.text}
                                <span className={styles.subtexto}>{props.subtext}</span>
                        </p>
                </div>
        )
}

export default Ajuda;