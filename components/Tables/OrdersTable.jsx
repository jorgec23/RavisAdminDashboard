import styles from './Tables.module.scss';
import {useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr';
import ActionButtonDynamicRoute from './ActionButtonDynamicRoute';
import {useUserProductOrderDetails} from "../../utils/UserProductOrderDetailsContext";

const fetcher = (url, params) => fetch(`${url}?word1=${params[0]}&word2=${params[1]}`).then((res) => res.json())
const pageOptions = [5, 10,15];
// const totalRowCount = 1000;

const countFetcher = (url) => fetch(`${url}`).then((resCount) => resCount.json())

export default function OrdersTable() {
  // hook into the user, order, product details context
  const {setOrderDetails} = useUserProductOrderDetails();

  const setOrder = (ordersData) => {
    setOrderDetails(ordersData);
    // console.log("updating data");
    // console.log(productData);
  }

  // set default page number
  const [page, setPage] = useState(0)
  // the initial number has to be one of the rowsPerPageOptions, else the selector disappears ...
  const [pageSize, setPageSize] = useState(5);

  // match up with the max for 'rowsPerPage' prop, allowing us to dynamically set the height for the table
  const gridHeight = Math.min(pageSize*54 +100, 100 + 54*15);

  // retrieve the data, redirect with useSWR because I do not want to expose the backend endpoint ...
  var { data, error } = useSWR(['/api/orders/getTableDetails/',[page,pageSize]], fetcher);
  const ordersData = data;
  const ordersError = error;

  // retrieve total row count from backend
  var {data , error} = useSWR(['/api/orders/getOrderCount/'], countFetcher);
  // console.log(isNaN(data));
  const rowCount = () => {
    const altCount = 50;
    if (isNaN(data)) {
      return altCount;
    }else {
      return data;
    }
  }
  // console.log(rowCount())
  const totalRowCount = rowCount();
  const rowCountError = error;
//   console.log('total row count after swr hook', totalRowCount);



  // some apis do not return totalRowCount correctly, so assume 0 if so
  const [rowCountState, setRowCountState] = useState(totalRowCount | 0);
  // recommended by datagrid docs to persist rowCount state when loading rows 
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      totalRowCount !== undefined ? totalRowCount : prevRowCountState,
      );
  }, [totalRowCount, setRowCountState]);
  
  
  if (ordersError) return <div>Failed to load</div>
  if (!ordersData) return <div>Loading...</div>

  
  // create rows to feed into the ProductsTable Component
  const {orderList = []} = ordersData;
  // console.log(data);
  const rowData = orderList.map((order,index) => {
    const{orderId, subTotal, datePlaced, shippedDate, pickupDate, deliveryDate, 
        status, syncedToSystem5, accountNumber, shippingAddress, billingAddress, emailSubmittedBy, nameUpdatedBy} = order;
      return {
        id: orderId, subTotal: subTotal, datePlaced: datePlaced, shippedDate:shippedDate, pickupDate:pickupDate, 
        deliveryDate: deliveryDate, status:status, syncedToSystem5:syncedToSystem5, accountNumber:accountNumber,
        shippingAddress:shippingAddress, billingAddress:billingAddress, emailSubmittedBy:emailSubmittedBy, 
        nameUpdatedBy:nameUpdatedBy, arrayInde:index
      }
  })

  // define columns
  const columns = [
    { field: 'id', headerName: 'Order ID', minWidth: 30, flex:1},
    { field: 'subTotal', headerName: 'Subtotal', minWidth: 30, flex:1},
    { field: 'datePlaced', headerName: 'Date Placed', type: 'string', minWidth: 30, flex:1},
    { field: 'shippedDate', headerName: 'Date Shipped', type: 'number', minWidth: 30, flex:1, headerAlign: 'left', align: 'left'},
    { field: 'pickupDate', headerName: 'Pickup Date', type: 'string', minWidth:30, flex:1},
    { field: 'deliveryDate', headerName: 'Date Delivered', type: 'string', minWidth:30, flex:1},
    { field: 'status', headerName: 'status', type: 'string', minWidth:30, flex:1},
    { field: 'syncedToSystem5', headerName: 'Synced', type: 'string', minWidth:30, flex:1},
    { field: 'accountNumber', headerName: 'Account Number', type: 'string', minWidth:30, flex:1},
    { field: 'shippingAddress', headerName: 'Shipping Address', type: 'string', minWidth:30, flex:1},
    { field: 'billingAddress', headerName: 'Billing Address', type: 'string', minWidth:30, flex:1},
    { field: 'emailSubmittedBy', headerName: 'Submitted By', type: 'string', minWidth:30, flex:1},
    { field: 'nameUpdatedBy', headerName: 'Updated By', type: 'string', minWidth:30, flex:1},
    { field: 'viewDetails', headerName: 'Actions', minWidth: 30, flex:2, renderCell:(params)=> {
    return (
      <div className={styles.actionButtonContainer} onClick={() => setOrder(orderList[params.row.arrayIndex])}>
        <ActionButtonDynamicRoute page='orders/search' title='View Details' id={`${params.row.id}`}/>
      </div> )}},
    { field: 'arrayIndex', headerName: 'Index', minWidth:30, flex:1},
  ];

  // hide the index column, useless to user, but for some reason, map is not passing the correct value, 
  // try without hiding first, to confirm that it corrects the index issue


  return (
    <div className={styles.customerTable}>
      <Box
        sx={{
          height:gridHeight,
          width:'calc(100% - 4rem)',
          // fontFamily:'Poppins',
          border:'2px solid rgba(0,0,0,.3)',
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          overflow: 'hidden',
          textAlign: 'left',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgb(89, 178, 16)',
            fontSize:'16px',
            fontWeight:700,
            overflowWrap:'break-word',
          },
          '& .MuiDataGrid-footerContainer': {
            height: '50px',
            fontSize: '14px',
            fontWeight:700,
            backgroundColor:'rgba(89, 178, 16,.4)',
          },
        }}>
       
        <DataGrid
          initialState={{
            columns: {
              columnVisibilityModel:{
                arrayIndex: false,
              },
            },
          }
          }
          rows={rowData}
          rowCount={rowCountState}
          columns={columns}
          pageSize={pageSize}
          page={page}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onPageChange={(newPage) => setPage(newPage)}
          pagination
          rowsPerPageOptions={pageOptions}
          checkboxSelection
          headerHeight = {50}
          paginationMode='server'
          keepNonExistentRowsSelected
        />
 
      </Box>
    </div>
  );
}