import { useState } from 'react';
import { connectMetamask, listenForAccountChanges } from './connectMetamask';



function App() {
  const [connectedAccount, setConnectedAccount] = useState(null);

  async function handleConnectMetamask() {
    try {
      const account = await connectMetamask();
      setConnectedAccount(account);
      listenForAccountChanges(setConnectedAccount);
    } catch (error) {
      alert(error.message);
    }
  }



  return (
    <>
      <button onClick={handleConnectMetamask}>Connect to Metamask</button>
      <h2>{connectedAccount ? connectedAccount : 'Not connected'}</h2>
    </>
  );
}

export default App;