import styles from "../../../styles/users/applicationDetails.module.scss";

export async function getServerSideProps(context){
    const orderId = context.params.apid;
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


export default function ApplicationDetails() {

    return (
        <div></div>
    )

}