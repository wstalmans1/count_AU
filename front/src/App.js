import { useState, useEffect } from 'react';
import { connectMetamask, listenForAccountChanges } from './connectMetamask';
import { getCount, incrementCount, decrementCount} from './contractUtils.js';


function App() {
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [count, setCount] = useState(null);

  // Metamask
  async function handleConnectMetamask() {
    try {
      const account = await connectMetamask();
      setConnectedAccount(account);
      listenForAccountChanges(setConnectedAccount);
      fetchCount();
    } catch (error) {
      alert(error.message);
    }
  }

  // Get the value of the variable "count"
  async function fetchCount() {
    const countValue = await getCount();
    setCount(countValue.toString());
  }

  // Increment the value of the variable "count"
  async function handleIncrement() {
    await incrementCount();
    fetchCount(); // Refresh the count after increment
  } 

  // Decrement the value of the variable "count"
  async function handleDecrement() {
    await decrementCount();
    fetchCount();
  }

  useEffect(() => {
    if(connectedAccount) {
      fetchCount();
    }
  }, [connectedAccount]);

  return (
    <>
      <button onClick={handleConnectMetamask}>Connect to Metamask</button>
      <h2>{connectedAccount ? connectedAccount : 'Not connected'}</h2>
      <h2>Count: {count !== null ? count : 'Loading...'}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>    
    </>
  );
}

export default App;