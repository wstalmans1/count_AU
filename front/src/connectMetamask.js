import { Web3 } from 'web3';

export async function connectMetamask() {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  } else {
    throw new Error('Please download Metamask');
  }
}

export function listenForAccountChanges(setConnectedAccount) {
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
      setConnectedAccount(accounts[0]);
    } else {
      setConnectedAccount(null);
    }
  });
}