import { useState } from 'react';
import Signin from './components/Signin';
import PolicyDetail from './components/PolicyDetail';

function App() {

  const [ accessToken, setAccessToken ] = useState();

  return (
    <div>
      { !accessToken ? 
        <Signin setAccessToken={setAccessToken} />
        : <PolicyDetail accessToken={accessToken} />
      }
    </div>
   
  );
}

export default App;
