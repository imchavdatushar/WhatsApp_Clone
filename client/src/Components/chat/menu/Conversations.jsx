import { useEffect, useState , useContext } from "react";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";
import { Box , styled , Divider} from "@mui/material";
 



const Component = styled(Box)`
    height : 81vh;
    overflow : overlay;
`


const NewDivider = styled(Divider)`
    margin : 0 0 0 70px;
    backgroundcolor : #e9edef;
    opacity : .6 ;
`


const Conversations = ({text}) => {

   const [users, setUsers] = useState([]);
   const {account, socket, setActiveUsers} = useContext(AccountContext);

   useEffect(() => {
    const fetchData = async () => {
        let data = await getUsers();
        let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(fiteredData);
    }
    fetchData();
}, [text]);


useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
}, [account])


    return(
      <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                    <Conversation user={user}/>
                    <NewDivider/>
                    </>
                ) )
            }
      </Component>
    )
}

export default Conversations;    