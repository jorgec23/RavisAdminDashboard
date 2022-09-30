import {useTheme} from "../../utils/ThemeContext";

export default function PlacedOrders(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Orders Placed')
  return (
    <h1>This is Orders Placed Page!</h1>
  )
}