import { Dialog, Box, Typography, List, ListItem } from "@mui/material";
import whatsaapimg from "../../images/whatsapp.jpg";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";
import styled from "@emotion/styled";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode'
import { useContext } from "react";


const Components = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Qrcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weigth: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const Styledlist = styled(List)`
  & > li {
    padding: 0;
    top-margin: 15px;
    font-size: 18px;
    line-height: 38px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden ",
};

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSuccess = async(res) => {

    const decoded = jwtDecode(res.credential)
    console.log(decoded)
    setAccount(decoded);
    await addUser(decoded);


  };

  const onLoginError = (res) => {

    console.log('Login Failed', res);

  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>

      <Components>

        <Container>

          <Title>To use WhatsApp on your computer</Title>

          <Styledlist>

            <ListItem>1. Open WhatsApp on your phone</ListItem>

            <ListItem>2. Tap Menu setting and select WhatsApp web</ListItem>

            <ListItem>3. Point your phone to this screen to capture the code</ListItem>

          </Styledlist>

        </Container>

        <Box style={{ position: 'relative' }}>

          <Qrcode src={whatsaapimg} alt="QR code" />

          <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>

            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />

          </Box>

        </Box>

      </Components>

    </Dialog>

  );
};

export default LoginDialog;
