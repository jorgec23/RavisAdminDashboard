import styles from "./ApplicationFormInput.module.scss";
import { CSSTransition } from 'react-transition-group';
import downTransitions from './customTransitions/down.module.scss';
import upTransitions from './customTransitions/up.module.scss';
import leftTransitions from './customTransitions/left.module.scss';
import rightTransitions from './customTransitions/right.module.scss';
import {useState, useEffect} from 'react';


export default function ApplicationFormInput(fieldName, fieldValue, span, index) {
    // set and cycle through transition classes
    const transitionClasses = [downTransitions, rightTransitions,upTransitions,leftTransitions];
    const setTransitions = (index) => {
        return transitionClasses[index%transitionClasses.length];
    }

    // set delay options, assign a different delay based on index value
    const transitionDelayOptions = [200, 400, 600, 800, 1000];
    const delayNumber = transitionDelayOptions[index%transitionDelayOptions.length];
//     const delayString = `${delayNumber}ms`;

    // set and cycle through color settings
    const colorOptions = [
        'rgb(222, 240, 207)',
        'rgb(189,224,159)',
        'rgb(155,209,112)',
        'rgb(122,193,64)',
        'rgb(89,178,16)',
    ];
    const setColor = (index) => {
        return colorOptions[index%colorOptions.length];
    }

    // setting up what will trigger the CSSTransition
    const [mounted, setMounted] = useState(false);
    useEffect(() =>{
        setTimeout(() => {setMounted(true)} , delayNumber);
    });

    return (
        <CSSTransition
            in={mounted}
            classNames={setTransitions(index)}
            timeout={1000}
            appear={true}
            unMountOnExit
        >
            <div className = {styles.mainContainer} style = {{ backgroundColor: setColor(index), gridColumn: span }} >
                <div className={styles.fieldNameContainer}>{fieldName}</div>
                <div className={styles.fieldValueContainer}>
                    <div className={styles.fieldValuePlaceholder}>{fieldValue}</div>
                </div>
            </div>
        </CSSTransition>
    )
}