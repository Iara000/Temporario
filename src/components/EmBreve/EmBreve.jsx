import React, { useState } from 'react'
import { Adm } from '../Navbar/NavbarElements';
import styles from './EmBreve.module.css'

const EmBreve = (props) => {
        const [display, setDisplay] = useState(false);

        const showHelp = () => setDisplay(true);
        const closeHelp = () => setDisplay(false);

        return(
                <div className={styles.imagem} >
                        <Adm
                                onMouseOver={showHelp}
                                onMouseOut={closeHelp}
                                />
                                <p className={`${display ? styles.texto : styles.invisible}`}>
                                {props.text}
                        </p>
                </div>
        )
}

export default EmBreve