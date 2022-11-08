import styles from "./ApplicationFormInput.module.scss";
import { CSSTransition } from 'react-transition-group';
import downTransitions from './customTransitions/down.module.scss';
import {useState, useEffect} from 'react';


export default function ApplicationFormInput(fieldName, fieldValue, backgroundColor, span) {
//     console.log(backgroundColor);

    const [mounted, setMounted] = useState(false);
    useEffect(() =>{
        setMounted(true);
    });

    return (
        <div className={styles.mainContainerWrapper}> 
            <CSSTransition
                in={mounted}
                classNames={downTransitions}
                timout={500}
                appear={true}
            >
                <div className = {styles.mainContainer} style = {{backgroundColor: backgroundColor, gridColumn: span}}>
                    <div className={styles.fieldNameContainer}>{fieldName}</div>
                    <div className={styles.fieldValueContainer}>
                        <div className={styles.fieldValuePlaceholder}>{fieldValue}</div>
                    </div>
                </div>
            </CSSTransition>
            
        </div>
        
    )
}