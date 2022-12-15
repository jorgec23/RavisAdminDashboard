import {useState, useEffect} from 'react';
import styles from './styles/OrderSubtotalBarChart.module.scss';
import OrderSubtotalTimeRangeDropdown from '../Dropdowns/OrderSubtotalTimeRangeDropdown';
import OrderSubtotalTimeIntervalDropdown from '../Dropdowns/OrderSubtotalTimeIntervalDropdown';
import OrderSubtotalBarChartSVG from './OrderSubtotalBarChartSVG';


const sampleData = [
    {category:'A', quantity: 40},
    {category:'B', quantity: 151},
    {category:'C', quantity: 89},
    {category:'D', quantity: 124},
    {category:'E', quantity: 183},
]

const dropdownOptions = {
    'Week': ['Day'],
    'Month': ['Day'],
    'Year': ['Week', 'Month'],
}


export default function OrderSubtotalBarChart() {
    const [timeRange, setTimeRange] = useState('Month');
    const [timeInterval, setTimeInterval] = useState('Day')
    const handleTimeRangeChange = (value) => {
        setTimeRange(value);
    }
    const handleTimeIntervalChange = (value) => {
        setTimeInterval(value);
    }
    // useEffect(()=>{
    //     console.log('display last', timeRange, 'view by', timeInterval);
    //     },[timeRange, timeInterval])

    return (
        <div className={styles.mainOrderSubtotalsContainer}>
            <div className={styles.barChartTitle}>Order Subtotals</div>
            <div className={styles.barChartOptionsContainer}>
                <div className={styles.barChartDropdownContainer}>
                    <div className={styles.barChartDropdownLabel}>View Last:</div>
                    <div className={styles.barChartDropdown}>
                        <OrderSubtotalTimeRangeDropdown defaultValue = {'Month'} updateRange={handleTimeRangeChange} updateDefaultInterval={setTimeInterval} dropdownOptions={dropdownOptions}/>
                    </div>
                </div>
                <div className={styles.barChartDropdownContainer}>
                    <div className={styles.barChartDropdownLabel}>Display By:</div>
                    <div className={styles.barChartDropdown}>
                        <OrderSubtotalTimeIntervalDropdown intervals={dropdownOptions[timeRange]} currentRange={timeRange} updateTime={handleTimeIntervalChange}/>
                    </div>
                </div>
            </div>
            <OrderSubtotalBarChartSVG data = {sampleData}/>
        </div>
    )
}