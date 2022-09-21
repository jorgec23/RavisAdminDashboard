import styles from "../styles/customers.module.scss"
import Layout from "../components/Layout"
import DataTable from "../components/customerTable/CustomerTable";


export default function customers(){
    return (
        <div className={styles.customerMain}>
            <h1> Customers???</h1>
            <DataTable/>
        </div>
    )
}