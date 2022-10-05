import {useRouter} from 'next/router';
import { useUserProductOrderDetails } from '../../utils/UserProductOrderDetailsContext';

export default function ProductDetails(){
    // hook into the user, order, product details context
  const {productDetails} = useUserProductOrderDetails();
  console.log(productDetails);
    return (
        <div>
            <span>what is going on</span>
            {JSON.stringify(productDetails)}
        </div>
    )
}