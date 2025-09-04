const hre= require("hardhat")

async function main() {
    const SkillPassport= await hre.ethers.getContractFactory("Skill-Passport")

    const skillPassport = await SkillPassport.deploy();

  await skillPassport.deployed();
  console.log("SkillPassport deployed to:", skillPassport.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
