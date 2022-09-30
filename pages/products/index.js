import {useTheme} from "../../utils/ThemeContext";

export default function ProductsHome(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Products Home')
  return (
    <h1>This is Products Page!  This should include a feature that allows admin to begin a sync of new products to the mobile database.</h1>
  )
}