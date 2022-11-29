import Chart from "../components/Graphs/BarChart2";
import styles from "../styles/Home.module.css";
import {useTheme} from "../utils/ThemeContext";



export default function Index(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Main Dashboard');

  return (
    <Chart/>
  )
}