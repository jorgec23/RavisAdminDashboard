import OrdersTable from "../../../components/Tables/OrdersTable";
import {useTheme} from "../../../utils/ThemeContext";

export default function SearchOrders(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Search Orders')
  return (
    <OrdersTable />
  )
}