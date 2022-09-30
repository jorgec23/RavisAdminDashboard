import {useTheme} from "../../utils/ThemeContext";

export default function UpdateOrders(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Update Orders')
  return (
    <h1>This is Orders Update Page!</h1>
  )
}