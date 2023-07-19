

// replace the name of the contract with which one you want to deploy!
const { utils } = require('ethers');
const {ethers} = require('hardhat')
const hre = require("hardhat");


async function main() {

  // deploys the escrow contract
  const contractName = "Escrow";
  const Escrow = await hre.ethers.getContractFactory(contractName);
  const escrow = await Escrow.deploy(
    "0x1FC81651ec89E2544d19de83c1b96BFf4C296fe9", 
    "0xfe42de0fad386dBAbF31C994C1b3B20CEEdba0eA", 
    { value: utils.parseEther("1") }
);

  console.log(`${contractName} deployed to address: ${escrow.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
