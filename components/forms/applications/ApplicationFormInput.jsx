import styles from "./ApplicationFormInput.module.scss";


export default function ApplicationFormInput(fieldName, fieldValue){
    
    return (
        <div className = {styles.mainContainer}>
            <div className={styles.fieldNameContainer}>{fieldName}</div>
            <div className={styles.fieldValueContainer}>
                <div className={styles.fieldValuePlaceholder}>{fieldValue}</div>
            </div>
        </div>
    )
}