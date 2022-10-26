import {useTheme} from "../../utils/ThemeContext";
import ProductsTable from "../../components/Tables/ProductsTable.jsx";
import styles from "../../styles/products/products.home.module.scss";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";


export default function ProductsHome(){
  // set the title of the main nav bar
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Search Products')

  const fieldsToSearch = ['Name', 'Unique ID', 'Category']

  return (
    <div className={styles.searchBarTableContainer}>
            
      <div className={styles.searchBarContainer}>
          <SearchBar category='Products' fieldsToSearch={fieldsToSearch}/>
      </div>
      <div className={styles.searchTableContainer}>
          <ProductsTable/> 
      </div>
    
    </div>
  )
}