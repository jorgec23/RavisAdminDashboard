import Layout from "../components/Layout";
import Testing from "./testing";
import styles from "../styles/Home.module.css";
import {useTheme} from "../utils/ThemeContext";

export default function Index(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Main Dashboard')
  return (
    <h1>THIS SHOULD BE THE DASHBOARD</h1>
  )
}