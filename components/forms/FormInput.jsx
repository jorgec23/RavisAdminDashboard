import styles from './FormInput.module.scss';

export default function FormInput({tagName, description, currentValue, register}) {

    const calcInputHeight = (descriptionString) =>{
        if (descriptionString.split(" ").length > 2) {
            return '50px';
        } else {
            return '25px';
        }
    }

    // javascript fix to leaving placeholder above input when something has been typed
    // const inputs = document.querySelectorAll('input');
    // inputs.forEach(e1 => {
    //     e1.addEventListener('blur', e=> {
    //         console.log(e1);
    //         if(e.target.value) {
    //             e.target.classList.add('dirty');
    //         } else {
    //             e.target.classList.remove('dirty');
    //         }
    //     })
    // })
    // not working, but i think react-form-hook might be able to solve this with its 'watch' and 'useWatch'
    // props

    // currently not working, probably have to set up a css variable to do this with javascript,
    // think the naming is getting in the way (CSS modules)
    const calcPlaceholdertWidth = () =>{
        const elem = document.getElementsByClassName(styles.inputStyles);
        const currentStyle = getComputedStyle(document.documentElement).getPropertyValue();
        return currentStyle.getPropertyValue('width');
    }


    return (
        <div className={styles.formInputContainer}>
            <div className={styles.formLabelContainer}>
                <div className={styles.mainLabel}>
                    {description}
                </div>
                <div className={styles.colonPostfix}>:</div>
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.labelInput} htmlFor={description}>
                    <input 
                        type="text" 
                        autoComplete='off' 
                        className={styles.inputStyles} 
                        // style={{height:calcInputHeight(String(currentValue))}} 
                        {...register(tagName, {required:false})} 
                    />
                    <span className={styles.currentValueStyles}>Current: {String(currentValue)}</span>
                </label>

            </div>
        </div>
    )
}