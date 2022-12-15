import OrderSubtotalBarChart from "../components/Graphs/OrderSubtotalBarChart";
import styles from "../styles/Home.module.scss";
import {useTheme} from "../utils/ThemeContext";
import {useState, useEffect, useRef} from 'react';



export default function Index(){
  const{mainNavBarTitle, setNavBarTitle} = useTheme();
  const setTitle = (title) => {
      setNavBarTitle(title);
  }
  setTitle('Main Dashboard');

  const [timeRange, setTimeRange] = useState('week');
  const [timeInterval, setTimeInterval] = useState('day');

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subtotalsChartContainer}>
        <OrderSubtotalBarChart />
      </div>
    </div>
    
  )
}