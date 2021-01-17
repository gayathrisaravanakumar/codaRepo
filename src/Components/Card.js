import React, {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';


export default function Card(props) {

     const [selectedUsers,setSelectedUsers] = useState([])

    function modifySelectedUsers(){
        let newObj = [];
        newObj = props.selectedRows.map(id => {return props.users[Number(id)]})
        setSelectedUsers(newObj);
    }
    
    useEffect(() =>  modifySelectedUsers(),[props.selectedRows])
    
    return(

       <div>
            {selectedUsers.length &&

                selectedUsers.map(user => (
                
                <div className="card">
                    <div style={{margin:"5%"}}>
                        <img src={user["Profile Image"]}  height="50px" style={{borderRadius : "50%"}} />
                       <div className="Name" >{user.Name}</div>
                   </div>
                   <div>
                        
                       <div clasName="price">Price : {user.Price}</div>
                       <div clasName="bet">Bet : {user.Bet}</div>
                   </div>
                </div>
                ))
            }

               { selectedUsers.length === 9 && 
                    <Button variant="contained" color="primary" onClick={() => props.startBet()} >
                         Start
                    </Button>
                }   
                {selectedUsers.length !== 9 && <h6>Please Select 9 user to start the bet</h6>}
              
       </div>
        // 

        )
}