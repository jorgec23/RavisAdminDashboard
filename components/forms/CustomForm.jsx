import styles from './CustomForm.module.scss';
import {useForm} from 'react-hook-form';
import FormInput from './FormInput';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import EditButtonTransitions from './customFormTransitions/EditButtonTransitions.module.scss';
import SubmitCancelButtonTransitions from './customFormTransitions/SubmitCancelButtonTransitions.module.scss';

export default function CustomForm({importantDetails, tags}) {
    const {register, handleSubmit} = useForm();

    const [unEditable , setUnEditable] = useState(true);
    const [editable, setEditable] = useState(false);

    const submitFormData = async (formData) => {
        setTimeout(() => {
            console.log("data is being submitted ...")
            console.log(formData);
        }, 1000)
    }

    return (   
        <form onSubmit={handleSubmit(submitFormData)}>
            <div className={styles.formContainer}>
                {importantDetails.map((details) => {
                        const {detail, value} = details;
                        return (
                            <FormInput key={details.id} description={tags[detail]} currentValue={value} register={register}/>
                        )
                })}
            </div>
            <div className={styles.buttonContainer}>
                <CSSTransition 
                    in={unEditable}
                    // appear={true}
                    unmountOnExit
                    classNames={EditButtonTransitions}
                    timeout={300}
                    onExited={() => setEditable(!editable)}
                >
                        <div className={styles.submitCancelButtonContainer}>
                            <button type="button" key="edit" className={styles.editSubmitCancelButton} onClick={() => setUnEditable(!unEditable)}>Edit Details</button>
                        </div>
                </CSSTransition>

                <CSSTransition
                    in={editable}
                    // appear={true}
                    unmountOnExit
                    classNames={EditButtonTransitions}
                    timeout={300}
                    onExited={() => setUnEditable(!unEditable)}
                >
                    <div className={styles.submitCancelButtonContainer}>
                            <button type="submit" key="submit" className={styles.editSubmitCancelButton}>Submit Changes</button>
                            <button type="button" key ="cancel" className={styles.editSubmitCancelButton} onClick={() => setEditable(!editable)}>Cancel Changes</button>
                        
                    </div>
                </CSSTransition>
            </div>
            
        </form>
    )
}