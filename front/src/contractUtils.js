import Web3 from 'web3';
import ContractABI from './ContractABI.json';

const contractAddress = '0xF98569F595Df44242c34329c6F4d17221c71107b';

export function getWeb3() {
  return new Web3(window.ethereum);
}

export function getContract(web3) {
  return new web3.eth.Contract(ContractABI, contractAddress);
}

export async function fetchData() {
  const web3 = getWeb3();
  const contract = getContract(web3);
  return await contract.methods.getData().call(); // Adjust 'getData' to your contract's method
}

export async function executeTransaction(data) {
  const web3 = getWeb3();
  const contract = getContract(web3);
  const accounts = await web3.eth.getAccounts();
  return await contract.methods.setData(data).send({ from: accounts[0] }); // Adjust 'setData' and parameters
}
