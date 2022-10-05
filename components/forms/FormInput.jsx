import styles from './userInfo.module.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function FormInput({description, currentValue}) {

    return (
        <div className={styles.formInputContainer}>
            <div className={styles.formLabelContainer}>
                <div className={styles.mainLabel}>
                    {description}
                </div>
                <div className={styles.colonPostfix}>:</div>
            </div>
            <div className={styles.inputContainer}>
                <label className="formDescription">
                    <input type="text" className={styles.inputStyles}></input>
                    <span className={styles.currentValueStyles}>{currentValue}</span>
                </label>

            </div>
        </div>
    )
}