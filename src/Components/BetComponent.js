import React, {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';


export default function BetComponent(props) {

     const [selectedUsers,setSelectedUsers] = useState([]);
     const [randomNumber, setRandomNumber] = useState(1);

     useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * Math.floor(9)))
     },[])

    function modifySelectedUsers(){
        let newObj = [];
        newObj = props.selectedRows.map(id => {return props.users[Number(id)]})
        setSelectedUsers(newObj);
    }
    
    useEffect(() =>  modifySelectedUsers(),[props.selectedRows])
    
    return(
        <div>

<h1>The Random Number is {randomNumber}</h1>
       <div className="Betcard">
           
            {selectedUsers.length &&

                selectedUsers.map(user => (
                
                <div className="card">
                    <div style={{margin:"5%"}}>
                        <img src={user["Profile Image"]}  height="50px" style={{borderRadius : "50%"}} />
                       <div className="Name">{user.Name}</div>
                   </div>
                   <div>
                        
                   <div clasName="price">Price : {randomNumber === Number(user.Bet)?Number(user.Price)*2:user.Price}</div>
                       <div clasName="bet">Bet : {user.Bet}</div>
                       {randomNumber === Number(user.Bet) && <h3 style={{fontWeight: "bold", color : "green"}}>Winner</h3>}
                       {randomNumber !== Number(user.Bet) && <div style={{fontWeight: "bold", color : "red"}}>Loser</div>}
                   </div>
                </div>
                ))
            }

        </div>
       </div>
        // 

        )
}