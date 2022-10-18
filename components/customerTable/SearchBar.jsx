import styles from './SearchBar.module.scss';

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
    console.log(spanText)

    
    return (
        <div className={styles.searchBarContainer}>
            <form action='/' className={styles.searchBarForm}>
                <label htmlFor='userSearchCriteria' className={styles.searchBarContent}> 
                    <input type='text' id='userSearchCriteria' name="userSearchCriteria" 
                        required className={styles.searchBarInputField}/>
                    <span className = {styles.searchBarPlaceholder}>Enter {spanText}</span>
                </label>
                <button type='submit' className={styles.searchButton}> Search {category} </button>
            </form>
        </div>
    )
}