import styles from './CustomForm.module.scss';
import {useForm} from 'react-hook-form';
import FormInput from './FormInput';
import { useState } from 'react';

export default function CustomForm({importantDetails, tags}) {
    const {register, handleSubmit} = useForm();

    const [editable , setEditable] = useState(false);

    const submitFormData = (formData) => {
        setTimeout(() => {
        console.log(formData);
        }, 2000)
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
                {editable?
                <button className={styles.editSubmitCancelButton} onClick={() => setEditable(!editable)}>Edit Details</button>:
                <div className={styles.submitCancelButtonContainer}>
                    <button className={styles.editSubmitCancelButton} type='submit'>Submit Changes</button>
                    <button className={styles.editSubmitCancelButton} onClick={() => setEditable(!editable)}>Cancel Changes</button>
                </div>
                }
            </div>
            
        </form>
    )
}