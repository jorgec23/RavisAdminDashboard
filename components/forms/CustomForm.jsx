import styles from './CustomForm.module.scss';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import FormInput from './FormInput';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import EditButtonTransitions from './customFormTransitions/EditButtonTransitions.module.scss';
import LoadingSpinner from './customFormTransitions/LoadingSpinner.jsx';
import {yupResolver} from '@hookform/resolvers/yup';


export default function CustomForm({defaultValues, importantDetails, tags, schema}) {
    const {register, handleSubmit, setError, formState: {isSubmitting, errors}} = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const [unEditable , setUnEditable] = useState(true);
    const [editable, setEditable] = useState(false);

    // a dummy async funtion to mimic waiting for an api response (will have to code it up on the backend)
    const submitFormData = async (formData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
            console.log("data is being submitted ...")
            console.log(formData);
            resolve(formData)
        }, 3000);
        });
    }

    const onSubmit = async (formData) => {
        const response = await submitFormData(formData);
        if (response.status === 400) {
            console.log("there is an error with the data or the database connection, have to code this up on the back end")
            // this code below relies on the back end returning an object of error(s), one for each field that failed validation I assume
            const fieldToErrorMessage = await response.json()
            for (const [fieldName, errorMessage] of Object.entries(fieldToErrorMessage)) {
                setError(fieldName, {type: 'custom', message: errorMessage})
            }
        } else if (response.ok) {
            console.log("successful edit was made")
        }
        else {
            console.log("unexpected error, (response is currently not wired properly ...)")
            console.log(errors.unique);
        }
    }

    return (   
        <form onSubmit={handleSubmit(submitFormData)}>
            <div className={styles.formContainer}>
                {importantDetails.map((details) => {
                        const {detail, value} = details;
                        return (
                            <FormInput key={details.id} tagName={detail} description={tags[detail]} currentValue={value} register={register}/>
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
                            <button disabled={isSubmitting} type="submit" key="submit" className={styles.editSubmitCancelButton}>
                                {isSubmitting?<div className={styles.loadingSpinnerContainer}><LoadingSpinner/><span>Saving...</span></div>:
                                "Submit Changes"}</button>
                            <button type="button" key ="cancel" className={styles.editSubmitCancelButton} onClick={() => setEditable(!editable)}>Cancel Changes</button>
                    </div>
                </CSSTransition>
                {(errors.length>0)&&<div className="error">I will have to map through each description, then list out the error here, "errors.fieldName?.message"</div>}
                {/* <div>{errors.unique?.message}</div> */}
                <div>
                    {editable&&!(Object.keys(errors).length === 0)&&Object.keys(errors).map((fieldName) => (
                        <ErrorMessage errors = {errors} name={fieldName} key={fieldName} render={({message}) => <div className={styles.clientErrors}>{message}</div>}/>
                    ))}
                </div>
            </div>
            
        </form>
    )
}