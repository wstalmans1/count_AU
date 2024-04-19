import Web3 from 'web3';
import ContractABI from './contractABI.json';

const contractAddress = '0xF98569F595Df44242c34329c6F4d17221c71107b';

export function getWeb3() {
  return new Web3(window.ethereum);
}

export function getContract(web3) {
  return new web3.eth.Contract(ContractABI, contractAddress);
}

export async function getCount() {
  const web3 = getWeb3();
  const contract = getContract(web3);
  return await contract.methods.get().call();
}

export async function incrementCount() {
  const web3 = getWeb3();
  const contract = getContract(web3);
  const accounts = await web3.eth.getAccounts();
  return await contract.methods.inc().send({ from: accounts[0] });
}

export async function decrementCount() {
  const web3 = getWeb3();
  const contract = getContract(web3);
  const accounts = await web3.eth.getAccounts();
  return await contract.methods.decr().send({ from: accounts[0] });
}