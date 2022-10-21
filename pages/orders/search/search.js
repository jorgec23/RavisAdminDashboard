import {useTheme} from "../../utils/ThemeContext";

export default function SearchOrders(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Search Orders')
  return (
    <h1>This is Orders Search Page!</h1>
  )
}