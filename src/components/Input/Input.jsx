import styles from './Input.module.css';
import Ajuda from '../Ajuda/Ajuda';

const Input = ( { type, placeholder, value, onChange, unidade, textHelp, subtextHelp,readOnly, data } ) => {
    return(
        <>
            {type === 'text' &&
                <input
                    type="text"
                    className={styles.input_form}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            }
            {type === 'number' &&
                <div className={styles.inputContainer}>
                    <p className={styles.unidade}>{unidade}</p>
                    <input
                        type='number'
                        className={styles.input_form}
                        placeholder={placeholder}
                        min="0"
                        step="0.01"
                        value={value}
                        onChange={onChange}
                    />
                    <Ajuda text={textHelp} subtext={subtextHelp} />
                </div>
            }
            {type === 'km' &&
                <input
                    type="number"
                    className={styles.inputkm}
                    placeholder={placeholder}
                    min="0"
                    step="0.5"
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                />
            }
            {type === 'select' &&
                <select 
                    value={value} 
                    onChange={(event) => onChange(event.target.value)} 
                    className={styles.input_form}
                >
                    <option disabled value="">{placeholder}</option>
                    {data.map( (item, index) => (
                        <option key={index} value={item.value}>{ item.label }</option>
                    ))}
                </select>
            }
        </>
    )
}

export default Input;