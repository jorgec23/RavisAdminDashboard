import {useTheme} from "../../utils/ThemeContext";
import DataTable from "../../components/customerTable/CustomerTable";
import SearchBar from "../../components/customerTable/SearchBar";
import styles from "../../styles/users/search.module.scss";


export default function SearchCustomers(){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
      setNavBarTitle(title);
    }
    setTitle('Search Users')

    return (
        <div className={styles.searchBarTableContainer}>
            
            <div className={styles.searchBarContainer}>
                <SearchBar/>
            </div>
            <div className={styles.searchTableContainer}>
                <DataTable/> 
            </div>
            
        </div>
    )
}