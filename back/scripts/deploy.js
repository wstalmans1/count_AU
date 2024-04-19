async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Balance = await ethers.getContractFactory("Count");
    const balance = await Balance.deploy();
  
    console.log("Count contract deployed to:", balance.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  