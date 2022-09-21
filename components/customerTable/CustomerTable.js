import styles from './CustomerTable.module.scss';
import {useState} from 'react';

// import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90,
  },
  {
    field: 'fullName', headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'buttonHolder', headerName: '', width: 100},
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

    // the initial number has to be one of the rowsPerPageOptions, else the selector disappears ...
const [pageSize, setPageSize] = useState(5);

  return (
    <div className={styles.customerTable}>
      <DataGrid
        // initialState={{
        //     pagination: {
        //         pageSize: 4,
        //     },
        // }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pagination
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
      />
    </div>
  );
}