import { Grid } from '@material-ui/core';
import React from 'react'
import DataGridDemo from './tableComponent';
import Card from './Card'
import BetComponent from './BetComponent';

class ListPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name :"Balaji",
            users : [],
            loading : true,
            selectedRows : [],
            selectedUsers : [],
            startBet : false
        }
    }
 
    componentDidMount(){
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json")
            .then(data => data.json())
            .then((data) => {
                this.setState({users : data}, () => {this.modifyData();})
            })
    }
    
    setSelectedRows = (arr) => {
        this.setState({selectedRows : arr},this.setSelectedUsers())
    }

    modifyData(){
        let id =0;
        let newObj = [];
        newObj = this.state.users.map(x => {
            let tempObj = {id : id++, ...x}
            return tempObj
        })
        this.setState({users : newObj,loading : false}, () => console.log(this.state))
    }

    startBet(){
        this.setState({startBet : true})
    }
 
    setSelectedUsers(){
        let newObj = [];
        newObj = this.state.selectedRows.map(id => {return this.state.users[Number(id)]})
        this.setState({selectedUsers : newObj})
    }
    render() {
        console.log(this.state)
        return (
            
            <Grid container>
                 {
                    this.state.startBet && <div> <BetComponent selectedRows = {this.state.selectedRows} users = {this.state.users} />  </div>
                }
                <Grid item xs={3} className="sideBar">
                 {!this.state.startBet && <Card selectedRows = {this.state.selectedRows} users = {this.state.users} 
                    startBet = {() => this.startBet()}
                 /> }
                </Grid>
                <Grid item xs={9}>
                    <div> 
                        {!this.state.loading && !this.state.startBet && <DataGridDemo rows={this.state.users} onRowChange = {(arr) => this.setSelectedRows(arr.rowIds)}  />} 
                    </div>
                </Grid>
               
            </Grid>
              
        )
    }
  }

  export default ListPage