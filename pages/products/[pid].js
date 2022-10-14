import styles from '../../styles/products/productDetails.module.scss';
import { useUserProductOrderDetails } from '../../utils/UserProductOrderDetailsContext';
import CustomForm from '../../components/forms/CustomForm';
import * as yup from 'yup';
import _default from 'yup/lib/locale';


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

  yup.addMethod(yup.string, 'intString', 
    function(fieldName) {
      return this.matches(/^\d+$/, `${fieldName} should have digits only ...`)
    } )

  const schema = yup.object().shape({
    unique: yup.number().typeError("Unique ID must be a number!").required(),
    description: yup.string(),
    inStock: yup.lazy(value => 
      {
        if (!(value === null || value === undefined || value === ""))
        { return yup.number().typeError("Quantity Available must be a number!")}
        else{
          return yup.mixed().notRequired();
        }
        
      }),
    measurement1: yup.lazy(value => 
      {
        if (!(value === null || value === undefined || value === ""))
        { return yup.number().typeError("Measurement 1 must be a number!")}
        else{
          return yup.mixed().notRequired();
        }
        
      }),
    measurement2: yup.lazy(value => 
      {
        if (!(value === null || value === undefined || value === ""))
        { return yup.number().typeError("Measurement 2 must be a number!")}
        else{
          return yup.mixed().notRequired();
        }
        
      }),
    packSize: yup.string().intString('Pack Size'),
    size1: yup.string(),
    size2: yup.string(),
    size3: yup.string(),
    unitOfMeasure: yup.string(),
    startSaleDate: yup.date().typeError('Start Sale Date should be formatted as: MM/DD/YYYY!'),
    endSaleDate: yup.date().typeError('End Sale Date should be formatted as: MM/DD/YYYY!!'),
    subCategory: yup.string().intString('Subcategory'),
    partNumber: yup.string().intString('Part Number'),
    itemNumber: yup.string().intString('Item Number'),
    supplierPartNumber: yup.string().intString('Supplier Part Number'),
    vendorId: yup.lazy(value => 
      {
        if (!(value === null || value === undefined || value === ""))
        { return yup.number().typeError("Vendor ID must be a number!")}
        else{
          return yup.mixed().notRequired();
        }
        
      }),
    markedDeleted: yup.boolean().typeError("Marked Deleted must be either true or false."),
  },
  [
    ['inStock', 'inStock'],
    ['measurement1', 'measurement1'],
    ['measurement2', 'measurement2'],
    ['vendorId', 'vendorId'],
  ]
  );

  const importantProductDetails = productDetailsArray.filter((productDetail) => productDetail.detail in tags );
  const defaultValues = importantProductDetails.reduce((obj,item)=>({...obj, [item.detail]: item.value}), {});


    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageTitle}>
                All Product Details
            </div>
            <div className={styles.productDetailsMainContainer}>
                <CustomForm defaultValues={defaultValues} importantDetails={importantProductDetails} tags={tags} schema={schema}/>
            </div>
            

        </div>
    )
}