require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // As the first line of the file


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ETHSCAN_API,
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Use environment variable to keep your private key secure
    }
  },
  etherscan: {
    apiKey: process.env.ETHSCAN_API
  },
  sourcify: {
    enabled: true
  }
};
