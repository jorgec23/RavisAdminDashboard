import OrderItemsTable from '../../../components/Tables/OrderItemsTable';
import styles from '../../../styles/orders/OrderItemsDetails.module.scss';


export async function getServerSideProps(context){
    const orderId = context.params.oid;
    const res = await fetch(`${process.env.orderItemsEndpoint}?${process.env.orderItemsSecretWord1}=${orderId}`);
    const orderItemsData = await res.json()
   
    if (!orderItemsData) {
        return{
            notFound: true,
        }
    }
    return {
        props: {orderItemsData},
    }   
}


export default function OrderDetails({orderItemsData}) {
    // for product details, there were no foreign keys, so the data was all extracted in the search page
    // injected into the Products Table
    // OrderModel has a lot of foreign keys and it has alot of children, ex: order items/products
    // as this is an admin dashboard, you want to see the entire model, as well as all of the 
    // respective foreign key references and the children, (tables that have a foreign key pointing to order model) 
    
    console.log(orderItemsData)
    return(
        <div className = {styles.orderItemsTableContainer}>
            <OrderItemsTable orderItemsData={orderItemsData}/>
        </div>
    )
}