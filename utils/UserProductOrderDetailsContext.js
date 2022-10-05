import React, {useContext, useState} from 'react';


// This context will store single instances of product, user, and order details,
// mainly used for transfer data from the search page to the view/edit details page
// To not make a big mess of the context wrapping, all three will be included in this file
export const UserProductOrderDetailsContext = React.createContext({
    userDetails: undefined,
    productDetails: undefined,
    orderDetails: undefined,
    setUserDetails: async(userDetails) => null,
    setProductDetails: async (productDetails) =>null,
    setOrderDetails: async (orderDetails) => null,
})

export const useUserProductOrderDetails = () => useContext(UserProductOrderDetailsContext)

export const UserProductOrderDetailsProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState({});
    const [productDetails, setProductDetails] = useState({});
    const [orderDetails, setOrderDetails] = useState({});
    return <UserProductOrderDetailsContext.Provider value={{ userDetails, productDetails, orderDetails, setUserDetails, setProductDetails, setOrderDetails}}>{children}</UserProductOrderDetailsContext.Provider>
}