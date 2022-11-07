import styles from "./ApplicationFormInput.module.scss";


export default function ApplicationFormInput(fieldName, fieldValue, backgroundColor, span) {
//     console.log(backgroundColor);
    return (
        <div className = {styles.mainContainer} style = {{backgroundColor: backgroundColor, gridColumn: span}}>
            <div className={styles.fieldNameContainer}>{fieldName}</div>
            <div className={styles.fieldValueContainer}>
                <div className={styles.fieldValuePlaceholder}>{fieldValue}</div>
            </div>
        </div>
    )
}