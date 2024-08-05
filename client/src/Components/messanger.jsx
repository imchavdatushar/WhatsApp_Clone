import { useContext } from 'react';
import {AppBar , Toolbar, styled, Box} from '@mui/material';
import LoginDialog from "./account/LoginDialog";
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';


const Components = styled(Box)`
    height : 100vh;
    background-color: #DCDCDC;
`
const Header = styled(AppBar)`
    height:125px;
    background-color: #00A884;
    box;shadow: none;
`

const LoginHeader = styled(AppBar)`
    height:220px;
    background-color: #00bfa5;
    box;shadow: none;
`

const Messanger = ()=> {

    const {account} = useContext(AccountContext);

    return(
        <Components>
        {
            account ?
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog/>
            </>
            
            :
        
        <>
        <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
        <LoginDialog/>
        </>
        }
        </Components>
    )

}
export default Messanger;