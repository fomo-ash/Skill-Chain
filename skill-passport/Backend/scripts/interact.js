const hre = require("hardhat");

async function main() {
  const [deployer, user1] = await hre.ethers.getSigners();

  // Replace with new deployed address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const SkillPassport = await hre.ethers.getContractFactory("SkillPassport");

  // Attach with user1 (so user1 is the passport owner)
  const skillPassport = SkillPassport.attach(contractAddress).connect(user1);

  // --- Mint Passport ---
  const tx = await skillPassport.mintPassport("ipfs://sample-uri");
  await tx.wait();
  console.log("Passport minted for:", user1.address);

  // --- Add Skill ---
  const tx2 = await skillPassport.addSkill(
    1,
    "Solidity",
    "Smart Contract Developer",
    "https://github.com/user/proof"
  );
  await tx2.wait();
  console.log("Skill added!");

  // --- Get Skills ---
  const skills = await skillPassport.getSkills(1);
  console.log("Skills:", skills);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
