import styles from './Tables.module.scss';
import {useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


// const totalRowCount = 1000;
const pageOptions = [5,20,25];

export default function OrderItemsTable({orderItemsData}) {
    // data will be passed on via serversideprops ...

    // set default page number
    const [page, setPage] = useState(0)
    // the initial number has to be one of the rowsPerPageOptions, else the selector disappears ...
    const [pageSize, setPageSize] = useState(10);

    // match up with the max for 'rowsPerPage' prop, allowing us to dynamically set the height for the table
    const gridHeight = Math.min(pageSize*54 +100, 100 + 54*25);
    
    // create rows to feed into the ProductsTable Component
    const {orderAllItemsList = []} = orderItemsData;
    // console.log(data);
    const rowData = orderAllItemsList.map((order) => {
        const{productId, qty, purchasePrice, productName} = order;
            return {
            id: productId, qty: qty, purchasedPrice:purchasePrice, productName:productName,
            }
    })

    // define columns
    const columns = [
        { field: 'id', headerName: 'Product ID', minWidth: 30, flex:1},
        { field: 'productName', headerName: 'Product Name', minWidth: 30, flex:3},
        { field: 'qty', headerName: 'Quantity', type: 'string', minWidth: 30, flex:1},
        { field: 'purchasePrice', headerName: 'Purchase Price', type: 'number', minWidth: 30, flex:2},
    ];



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
            rows={rowData}
            columns={columns}
            pageSize={pageSize}
            page={page}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onPageChange={(newPage) => setPage(newPage)}
            pagination
            rowsPerPageOptions={pageOptions}
            checkboxSelection
            headerHeight = {50}
            keepNonExistentRowsSelected
            />
    
        </Box>
        </div>
    );
}