import styles from "./ApplicationFormInput.module.scss";
import { CSSTransition } from 'react-transition-group';
import downTransitions from './customTransitions/down.module.scss';
import upTransitions from './customTransitions/up.module.scss';
import leftTransitions from './customTransitions/left.module.scss';
import rightTransitions from './customTransitions/right.module.scss';
import {useState, useEffect} from 'react';


export default function ApplicationFormInput(fieldName, fieldValue, backgroundColor, span, index) {
//     console.log(backgroundColor);
    const transitionClasses = [downTransitions, rightTransitions,upTransitions,leftTransitions];

    const setTransitions = (index) => {
        return transitionClasses[index%transitionClasses.length];
    }

    const [mounted, setMounted] = useState(false);
    useEffect(() =>{
        setMounted(true);
    });

    return (
        <div className={styles.mainContainerWrapper}> 
            <CSSTransition
                in={mounted}
                classNames={setTransitions(index)}
                timeout={1000}
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