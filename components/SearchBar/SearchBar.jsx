import styles from './SearchBar.module.scss';
import {FormProvider, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useState} from 'react';
import LoadingSpinner from '../forms/customFormTransitions/LoadingSpinner';


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

    
    return (
        <div className={styles.searchBarContainer}>
            <form onSubmit={handleSubmit(submitSearch)} className={styles.searchBarForm}>
                <label htmlFor={category} className={styles.searchBarContent}> 
                    <input {...register("wordToSearch", {required:true})}  type='text'
                        required className={styles.searchBarInputField}/>
                    <span className = {styles.searchBarPlaceholder}>Enter {spanText}</span>
                </label>
                <button type='submit' className={styles.searchButton} type="submit"> Search {category} </button>
            </form>
        </div>
    )
}