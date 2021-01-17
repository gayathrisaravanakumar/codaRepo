import * as React from 'react';
import { DataGrid} from '@material-ui/data-grid'; 
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    <div style={{ height: 400, width: '100%'}}>
       <AppBar position="static">
        <Toolbar className="toolBar">
         <Typography variant="h6" noWrap>
            CodaGlobal
          </Typography>
          <div className="SearchBar">
          <input type="text" style={{padding:"2%",borderRadius:"2%"}} onChange={function (event){console.log(event)}} />
          </div>
        </Toolbar>
      </AppBar>
      <Divider />
      <DataGrid className="dataGrid" rows={props.rows} columns={columns} pageSize={10} checkboxSelection autoHeight = {true} onSelectionChange ={ (newSelection) => props.onRowChange(newSelection)} />
    </div>
  );
}