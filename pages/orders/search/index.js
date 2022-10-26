import OrdersTable from "../../../components/Tables/OrdersTable";
import {useTheme} from "../../../utils/ThemeContext";
import styles from "../../../styles/orders/SearchOrders.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar.jsx";

export default function SearchOrders(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Search Orders')

  const fieldsToSearch = ['Name', 'Order ID', 'Email']

  return (
    <div className={styles.searchBarTableContainer}>
      <div className={styles.searchBarContainer}>
        <SearchBar category='Orders' fieldsToSearch={fieldsToSearch}/>
      </div>
      <div className={styles.searchTableContainer}>
        <OrdersTable />
      </div>

    </div>
    
  )
}