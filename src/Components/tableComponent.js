import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'First name', width: 130 },
  {
    field: 'Bet',
    headerName: 'Bet',
    type: 'number',
    width: 90,
  },
  {field : "Price" , headerName : "Price" , width : 200},
  {field : "Profile Image" , headerName : "Avatar", width : 300,
  renderCell: (params) => (
      <img src={params.getValue('Profile Image')} style ={{borderRadius:"50%"}} height="50px" />

  ),}
];


export default function DataGridDemo(props) {
    console.log(props)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={props.rows} columns={columns} pageSize={10} checkboxSelection autoHeight = {true} onSelectionChange ={ (newSelection) => props.onRowChange(newSelection)}/>
    </div>
  );
}