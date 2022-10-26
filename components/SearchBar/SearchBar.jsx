import styles from './SearchBar.module.scss';
import {FormProvider, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useState} from 'react';
import LoadingSpinner from '../forms/customFormTransitions/LoadingSpinner';
import { CSSTransition } from 'react-transition-group';
import SearchBarPlaceholderTransitions from './SearchBarPlaceholderTransitions.module.scss';


export default function SearchBar({category, fieldsToSearch}){

    let spanText = ''
    if (fieldsToSearch.length == 1) {
        spanText = fieldsToSearch[0]

    } else if (fieldsToSearch.length == 2) {
        spanText+=fieldsToSearch[0]
        spanText += ' or '
        spanText += fieldsToSearch[1]
    } else {
        for (let i = 0; i < fieldsToSearch.length-1; i++) {
        spanText += fieldsToSearch[i]
        spanText += ', '
        }
        spanText += 'or '
        spanText += fieldsToSearch[fieldsToSearch.length-1]
    }
    // console.log(spanText)

    const {register, handleSubmit,watch, formState: {errors, isSubmitting}} = useForm();

    const submitSearch = async (formData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('searching for mathing rows');
                console.log(formData);
                resolve(formData);
            }, 2000);
        });
    }

    const watchSearch = watch("wordToSearch", '');
    const isDirty = () => {
        if (watchSearch != '') {
            return true;
        } else {
            return false;
        }
    }

    const [isFocused, setIsFocused] = useState(false);
    const changeFocus = () => {
        // console.log('is focused, before set call=', isFocused)
        // console.log('precheck of focused state', !isFocused)
        setIsFocused(true);
        // console.log('a focus has occured....')
        // console.log('is focused, after set call =', isFocused)
    }
    const blurFocus = () => {
        // console.log('blurring, before call', isFocused)
        setIsFocused(false);
        // console.log('blurring has occured', isFocused)
    }

    // onFocus={() => changeFocus()}
    // onBlur = {() => blurFocus()}

    return (
        <div className={styles.searchBarContainer}>
            <form onSubmit={handleSubmit(submitSearch)} className={styles.searchBarForm}>
                <label htmlFor={category} className={styles.searchBarContent}> 
                    <input {...register("wordToSearch", {required:true})}  type='text'
                        required className={styles.searchBarInputField}
                        onClick={()=>setIsFocused(!isFocused)} autocomplete="off"/>
                    <CSSTransition 
                        in = {isFocused}
                        classNames = {SearchBarPlaceholderTransitions}
                        timeout={1000}
                        onExited = {()=>{console.log('exiting animation', isFocused)}}
                        onEnter = {()=>{console.log('entering animation', isFocused)}}
                    >
                        <div className={styles.searchBarPlaceholder}>
                            <span>Enter {spanText}</span>
                        </div>
                    </CSSTransition>
                    
                    
                </label>
                <button type='submit' className={styles.searchButton} type="submit"> Search {category} </button>
            </form>
        </div>
    )
}