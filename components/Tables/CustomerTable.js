import styles from './CustomerTable.module.scss';
import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ActionButtonDynamicRoute from './ActionButtonDynamicRoute';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 30, flex:1},
  { field: 'firstName', headerName: 'First name', minWidth: 30, flex:2},
  { field: 'lastName', headerName: 'Last name', minWidth: 30, flex:2},
  { field: 'age', headerName: 'Age', type: 'number', minWidth: 30, flex:.75, headerAlign: 'left', align: 'left'},
  {
    field: 'fullName', headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 30,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    flex: 2,
  },
  { field: 'buttonHolder', headerName: 'Actions', minWidth: 30, flex:2, renderCell:(params)=> {return (<div className={styles.actionButtonContainer}><ActionButtonDynamicRoute page='users' title='Edit Profile' id={`${params.row.id}`}/></div> )}},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 49022199, lastName: "Smith", firstName: "John", age: 37},
  { id: 350, lastName: 'Adams', firstName: 'Bill', age: 55, buttonHolder: ''},
];




export default function DataTable() {
  console.log(rows);

// the initial number has to be one of the rowsPerPageOptions, else the selector disappears ...
const [pageSize, setPageSize] = useState(5);
// match up with the max for 'rowsPerPage' prop
const gridHeight = Math.min(pageSize*54 +100, 100 + 54*15);
console.log(gridHeight)


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
          },
          '& .MuiDataGrid-columnHeaderCheckbox': {
            // width:'100px',
            // height:'100px',
            // backgroundColor:'yellow',
          },
          '& .MuiDataGrid-footerContainer': {
            // backgroundColor: 'rgb(89, 178, 16)',
            height: '50px',
            fontSize: '14px',
            fontWeight:700,
            backgroundColor:'rgba(89, 178, 16,.4)',
          },
          '& .boldPls':{
            fontWeight:'bold',
            backgroundColor:'rgba(0,255,0,.2',
          }
        }}>
        
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pagination
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          headerHeight = {50}
        /> 
      </Box>
    </div>
  );
}