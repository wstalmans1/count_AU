import { useState, useEffect } from 'react';
import { connectMetamask, listenForAccountChanges } from './connectMetamask';
import { getCount, incrementCount, decrementCount} from './contractUtils.js';


function App() {
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false); //added loading state

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
    setLoading(false); // Stop loading after fetching
  }

  // Increment the value of the variable "count"
  async function handleIncrement() {
    setLoading(true); // Start loading before the transaction
    await incrementCount();
    fetchCount(); // Refresh the count after increment
  } 

  // Decrement the value of the variable "count"
  async function handleDecrement() {
    setLoading(true); // Start loading before the transaction
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
      {loading && <p>Waiting for your latest transaction to be inserted in a block...</p>}      
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>    
    </>
  );
}

export default App;