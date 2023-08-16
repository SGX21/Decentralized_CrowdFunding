const hre = require("hardhat");
//0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x5FbDB2315678afecb367f032d93F642f64180aa3
// CrowdFunding deployed to 4180aa3

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory
  ("CrowdFunding")
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(`CrowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
