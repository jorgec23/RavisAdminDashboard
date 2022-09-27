import styles from './PopupMessage.module.scss';

export default function PopupMessage({amount, name, message, date, orderType}) {
    if(amount){
        return (
            <div className={styles.popupMessageContainer}>
                <div className={styles.mainMessageContainer}>
                    <p ><span className={styles.orderAmount}>${amount}</span> by <span className={styles.mainMessageName}>{name}</span> - via <span className={styles.mainMessageName}>{orderType}</span></p>
                </div>
                <div className={styles.dateContainer}>{date}</div>
            </div>
        )
    }
    else{
        return (
                <div className={styles.popupMessageContainer}>
                    <div className={styles.mainMessageContainer}>
                        <p ><span className={styles.mainMessageName}>{name} - </span>{message}</p>
                    </div>
                    <div className={styles.dateContainer}>{date}</div>
                </div>
            )
    }
    
}