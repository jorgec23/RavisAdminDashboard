import styles from './SearchBar.module.scss';

export default function SearchBar(){

    return (
        <div className={styles.searchBarContainer}>
            <form action='/'>
                <label htmlFor='userSearchCriteria' className={styles.searchBarTitle}> Enter User Info: </label>
                <input type='text' id='userSearchCriteria' name="userSearchCriteria" required className={styles.searchBarInputField}/>
                <button type='submit' className={styles.searchButton}> Search </button>
            </form>
        </div>
    )
}