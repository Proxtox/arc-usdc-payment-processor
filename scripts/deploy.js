const hre = require("hardhat");

async function main() {
  const PaymentProcessor = await hre.ethers.getContractFactory("PaymentProcessor");
  const processor = await PaymentProcessor.deploy("0xYourUSDCAddressHere");
  await processor.deployed();
  console.log("PaymentProcessor deployed to:", processor.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});