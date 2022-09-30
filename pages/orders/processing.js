import {useTheme} from "../../utils/ThemeContext";

export default function ProcessingOrders(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Orders Processing')

  
  return (
    <h1>This is Orders Processing Page!  Maybe link some Runner information in this tab, but I think the mobile app allows them to see this already?</h1>
  )
}