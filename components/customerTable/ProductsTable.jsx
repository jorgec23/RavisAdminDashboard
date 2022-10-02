
import styles from './CustomerTable.module.scss';
import {useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ActionButton from './UserTableActionButton';
import useSWR from 'swr';

const fetcher = (url, params) => fetch(`${url}?word1=${params[0]}&word2=${params[1]}`).then((res) => res.json())

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 30, flex:1},
  { field: 'description', headerName: 'Product', minWidth: 30, flex:3},
  { field: 'inStock', headerName: 'Current Stock', type: 'string', minWidth: 30, flex:1},
  { field: 'itemNumber', headerName: 'Item Number', type: 'number', minWidth: 30, flex:2, headerAlign: 'left', align: 'left'},
  { field: 'wholesale', headerName: 'Wholesale Price', type: 'string', minWidth:30, flex:1},
  { field: 'buttonHolder', headerName: 'Actions', minWidth: 30, flex:2, renderCell:(params)=> {return (<div className={styles.actionButtonContainer}><ActionButton title='View Details' id={`${params.row.id}`}/></div> )}},
];
const pageOptions = [3, 10,15];
const totalRowCount = 1000;

export default function ProductsTable() {
  // set default page number
  const [page, setPage] = useState(0)
  // the initial number has to be one of the rowsPerPageOptions, else the selector disappears ...
  const [pageSize, setPageSize] = useState(3);
  // match up with the max for 'rowsPerPage' prop, allowing us to dynamically set the height for the table
  const gridHeight = Math.min(pageSize*54 +100, 100 + 54*15);
  const { data, error } = useSWR(['/api/products/getProducts/',[pageSize,page]], fetcher)
  // console.log(data);
  console.log(page, pageSize)
  // const {data, error} = useSWR('https://api.coindesk.com/v1/bpi/currentprice.json',fetcher);

  // some apis do not return totalRowCount correctly, so assume 0 if so
  const [rowCountState, setRowCountState] = useState(totalRowCount || 0,);
  // recommended by datagrid docs to persist rowCount state when loading rows 
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      totalRowCount !== undefined ? totalRowCount : prevRowCountState,
      );
  }, [totalRowCount, setRowCountState]);
  
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  // create rows to feed into the ProductsTable Component
  const {customerList =[]} = data;
  const rowData = customerList.map(product => {
    const{unique, description, inStock, itemNumber, wholesale} = product;
      return {
        id: unique, description: description, inStock: inStock, itemNumber:itemNumber, wholesale:wholesale
      }
  })
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