import styles from "../styles/Home.module.css";
import {useTheme} from "../utils/ThemeContext";



export default function Index(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Main Dashboard');

  return (
    <h1>This is the home page, the first thing a user who logs in will see!</h1>
  )
}