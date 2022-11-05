import {useTheme} from "../../../utils/ThemeContext";
import styles from "../../../styles/users/allApplications.module.scss";

const{setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Review Account Application')



export default function ReviewUserApplication(){

const fieldsToSearch = ['Name', 'Application ID', 'Email']

    return (
        <div className={styles.searchBarTableContainer}>
                
            <div className={styles.searchBarContainer}>
                <SearchBar category='Applications' fieldsToSearch={fieldsToSearch}/>
            </div>
            <div className={styles.searchTableContainer}>
                {/* <ProductsTable/>  */}
            </div>
        
        </div>
    )
        
}