import {useTheme} from "../../utils/ThemeContext";
import ProductsTable from "../../components/customerTable/ProductsTable";
import styles from "../../styles/products/products.home.module.scss";


export default function ProductsHome(){
  // set the title of the main nav bar
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Products Home')


  return (
    <div className={styles.productsTableContainer}>
      <ProductsTable/>
    </div>
  )
}