import styles from "./ApplicationFormInput.module.scss";


export default function ApplicationFormInput(fieldName, fieldValue, backgroundColor) {
//     console.log(backgroundColor);
    return (
        <div className = {styles.mainContainer} style = {{backgroundColor: backgroundColor}}>
            <div className={styles.fieldNameContainer}>{fieldName}</div>
            <div className={styles.fieldValueContainer}>
                <div className={styles.fieldValuePlaceholder}>{fieldValue}</div>
            </div>
        </div>
    )
}