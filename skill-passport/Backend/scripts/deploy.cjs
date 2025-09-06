const hre= require("hardhat")

async function main() {
    const SkillPassport= await hre.ethers.getContractFactory("SkillPassport")

    const skillPassport = await SkillPassport.deploy();

  await skillPassport.
  waitForDeployment();

  const contractAddress= await skillPassport.getAddress();
  console.log("SkillPassport deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
