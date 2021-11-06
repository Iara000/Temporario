import styles from './Input.module.css';
import Ajuda from '../Ajuda/Ajuda';

const Input = (props) => {
    return(
        <>
            {props.type === 'text' &&
                <input
                    type="text"
                    className={styles.input_form}
                    placeholder={props.placeholder}
                    value={props.value}
                />
            }
            {props.type === 'number' &&
                <div className={styles.inputContainer}>
                    <input
                        type="number"
                        className={styles.input_form}
                        placeholder={props.placeholder}
                        min="0"
                        value={props.value}
                    />
                    <Ajuda text={props.textHelp} subtext={props.subtextHelp} />
                </div>
            }
            {props.type === 'km' &&
                <input
                    type="number"
                    className={styles.inputkm}
                    placeholder={props.placeholder}
                    min="0"
                    step="0.5"
                    value={props.value}
                />
            }
        </>
    )
}

export default Input;