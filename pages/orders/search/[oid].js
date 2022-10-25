import OrderItemsTable from '../../../components/Tables/OrderItemsTable';
import styles from '../../../styles/orders/OrderItemsDetails.module.scss';
import {useUserProductOrderDetails} from '../../../utils/UserProductOrderDetailsContext';




export async function getServerSideProps(context){
    const {orderDetails, setOrderDetails} = useUserProductOrderDetails();
    const {orderId} = orderDetails;
    const res = await fetch(`${process.env.orderItemsEndpoint}&${orderItemsSecretWord1}=${orderId}`);
    const data = await res.json()
   
    if (!data) {
        return{
            notFound: true,
        }
    }
    return {
        props: {orderItemsData},
    }   
}


export default function OrderDetails() {
    // for product details, there were not foreign keys, so the data was all extracted in the search page
    // injected into the Products Table
    // OrderModel has a lot of foreign keys and it has alot of children, ex: order items/products
    // as this is an admin dashboard, you want to see the entire model, as well as all of the 
    // respective foreign key references and the children, (tables that have a foreign key pointing to order model) 

    return(
        <div className = {styles.orderItemsTableContainer}>
            <OrderItemsTable orderItemsData={orderItemsData}/>
        </div>
    )
}