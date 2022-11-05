import {useTheme} from "../../../utils/ThemeContext";
import styles from "../../../styles/users/allApplications.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import ApplicationsTable from "../../../components/Tables/ApplicationsTable.jsx";


export default function ReviewUserApplication(){
    const{setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Review Account Application')

    const fieldsToSearch = ['Name', 'Application ID', 'Email']

    return (
        <div className={styles.searchBarTableContainer}>
                
            <div className={styles.searchBarContainer}>
                <SearchBar category='Applications' fieldsToSearch={fieldsToSearch}/>
            </div>
            <div className={styles.searchTableContainer}>
                <ApplicationsTable></ApplicationsTable>
            </div>
        
        </div>
    )
        
}