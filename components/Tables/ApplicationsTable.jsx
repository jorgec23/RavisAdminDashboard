import styles from './Tables.module.scss';
import {useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr';
import ActionButtonDynamicRoute from './ActionButtonDynamicRoute';

const fetcher = (url, params) => fetch(`${url}?word1=${params[0]}&word2=${params[1]}`).then((res) => res.json())
const pageOptions = [10, 20, 50];
// const totalRowCount = 1000;

const countFetcher = (url) => fetch(`${url}`).then((resCount) => resCount.json())

export default function ProductsTable() {

  // set default page number
  const [page, setPage] = useState(0)
  // the initial number has to be one of the rowsPerPageOptions, else the selector disappears ...
  const [pageSize, setPageSize] = useState(5);

  // match up with the max for 'rowsPerPage' prop, allowing us to dynamically set the height for the table
  const gridHeight = Math.min(pageSize*54 +100, 100 + 54*20);

  // retrieve the data, redirect with useSWR because I do not want to expose the backend endpoint ...
  var { data, error } = useSWR(['/api/users/applications/getApplicationTableDetails/',[page,pageSize]], fetcher);
  const applicationsData = data;
  const applicationsError = error;

  // retrieve total row count from backend
  var {data , error} = useSWR(['/api/users/applications/getApplicationTableCount/'], countFetcher);
  // console.log(isNaN(data));
  const rowCount = () => {
    const altCount = 9;
    if (isNaN(data)) {
      return altCount;
    }else {
      return data;
    }
  }

  const totalRowCount = rowCount();
  const rowCountError = error;


  // some apis do not return totalRowCount correctly, so assume 0 if so
  const [rowCountState, setRowCountState] = useState(totalRowCount | 0);
  // recommended by datagrid docs to persist rowCount state when loading rows 
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      totalRowCount !== undefined ? totalRowCount : prevRowCountState,
      );
  }, [totalRowCount, setRowCountState]);
  
  
  if (applicationsError) return <div>Failed to load</div>
  if (!applicationsData) return <div>Loading...</div>

  
  // create rows to feed into the ProductsTable Component
  const {applicationsTableDetailsList =[]} = applicationsData;
  // console.log(data);
  const rowData = applicationsTableDetailsList.map((application,index) => {
    const{id, status, businessStreetAddress, businessName, ownerFirstName, 
        businessCity, businessState, businessEmail, ownerLastName, cell, 
        businessZipcode, officePhone} = application;
      return {
        id: id, status: status, businessStreetAddress: businessStreetAddress, businessName:businessName, 
        ownerFirstName: ownerFirstName, businessCity: businessCity, businessState: businessState, 
        businessEmail: businessEmail, ownerLastName: ownerLastName, cell:cell, businessZipcode: businessZipcode, 
        officePhone: officePhone
      }
  })

  // define columns
  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 20, flex:.5},
    { field: 'status', headerName: 'Status', minWidth:20, flex:.5},
    { field: 'ownerFirstName', headerName: 'First Name', minWidth:30, flex:2},
    { field: 'ownerLastName', headerName: 'Last Name', minWidth:30, flex:3},
    { field: 'businessName', headerName: 'Business Name', minWidth:30, flex:3},
    { field: 'businessStreetAddress', headerName: 'Address', minWidth:30, flex:5},
    { field: 'businessCity', headerName: 'City', minWidth:30, flex:2},
    { field: 'businessState', headerName: 'State', minWidth:30, flex:1},
    { field: 'businessZipcode', headerName: 'Zipcode', minWidth:30, flex:1.5},
    { field: 'businessEmail', headerName: 'Email', minWidth:30, flex:4},
    { field: 'cell', headerName: 'Cell Phone Number', minWidth:30, flex:2},
    { field: 'officeNumber', headerName: 'Office Phone Number', minWidth:30, flex:1.5},
    { field: 'buttonHolder', headerName: 'Actions', minWidth: 30, flex:2, renderCell:(params)=> {
    return (
      <div className={styles.actionButtonContainer} onClick={() => setUsers(customerList[params.row.arrayIndex])}>
        <ActionButtonDynamicRoute page='users/applications' title='View Details' id={`${params.row.id}`}/>
      </div> )}},
    { field: 'arrayIndex', headerName: 'Index', minWidth:30, flex:1},
  ];

  // hide the index column, useless to user, but for some reason, map is not passing the correct value, try without hiding first, to confirm that it corrects the index issue


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