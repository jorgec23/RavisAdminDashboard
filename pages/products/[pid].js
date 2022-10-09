import styles from '../../styles/products/productDetails.module.scss';
import { useUserProductOrderDetails } from '../../utils/UserProductOrderDetailsContext';
import FormInput from '../../components/forms/FormInput';


export default function ProductDetails(){
    // hook into the user, order, product details context
  const {productDetails} = useUserProductOrderDetails();

  const productDetailsArray = [];
  for (const detail in productDetails) {
    productDetailsArray.push({detail: detail, value: productDetails[detail]})
  }

  const tags = {
    unique: 'Unique ID',
    description: 'Product Name',
    inStock: 'Quantity Available',
    measurement1: 'Measurement 1',
    measurement2: 'Measurement 2',
    packSize: 'Pack Size',
    size1: 'R Size',
    size2: 'R Count',
    size3: 'R Promo',
    unitOfMeasure: 'Units Measure',
    startSaleDate: 'Starting Sale Date',
    endSaleDate: 'Ending Sale Date',
    subCategory: 'Subcategory',
    partNumber: 'Part Number',
    itemNumber: 'Item #',
    supplierPartNumber: 'Supplier Part #',
    vendorId: 'Vendor ID',
    markedDeleted: 'Marked Deleted',
  }

  const importantProductDetails = productDetailsArray.filter((productDetail) => productDetail.detail in tags );


    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageTitle}>
                All Product Details
            </div>
            <div className={styles.productDetailsMainContainer}>
                {importantProductDetails.map((details) => {
                    const {detail, value} = details;
                    return (
                        <FormInput key={details.id} description={tags[detail]} currentValue={value}/>
                    )
                })}
            </div>
            <div className={styles.buttonContainer}>

            </div>

        </div>
    )
}