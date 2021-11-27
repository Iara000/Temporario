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
                    onChange={props.onChange}
                />
            }
            {props.type === 'number' &&
                <div className={styles.inputContainer}>
                    <p className={styles.unidade}>{props.unidade}</p>
                    <input
                        type='number'
                        className={styles.input_form}
                        placeholder={props.placeholder}
                        min="0"
                        value={props.value}
                        onChange={props.onChange}
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
                    onChange={props.onChange}
                    readOnly={props.readOnly}
                />
            }
        </>
    )
}

export default Input;