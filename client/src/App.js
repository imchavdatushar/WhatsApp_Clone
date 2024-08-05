

import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from "./Components/messanger";
import AccountProvider from './context/AccountProvider';


function App() {

    const clientId = '658961473769-3olvfmtdq9g8huectqim5l8rm9qtidin.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider  clientId={clientId}>
      <AccountProvider>
      <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
