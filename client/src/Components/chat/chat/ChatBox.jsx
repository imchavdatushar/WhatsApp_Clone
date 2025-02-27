import { Box } from "@mui/material";
import ChatHeadre from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";





const ChatBox = () => {

    const {person,account } = useContext(AccountContext);

    const [conversation , setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

 

    return(
       <Box style ={{height : '75%'}}>
            <ChatHeadre person={person}/>
            <Messages person={person} conversation={conversation} />
       </Box>
    )
}

export default ChatBox;