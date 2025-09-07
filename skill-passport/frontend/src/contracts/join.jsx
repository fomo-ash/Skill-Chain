import React, { useState } from "react";
import { ethers } from "ethers";
import SkillPassport from "./SkillPassport.json";

const contractAddress = " 0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function PassportApp() {
  const [account, setAccount] = useState(null);
  const [status, setStatus] = useState("");
  const [skill, setSkill] = useState({ name: "", description: "", proof: "" });

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setStatus("Wallet connected ✅");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Install MetaMask!");
    }
  }

  async function mintPassport() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, SkillPassport.abi, signer);

      // Using placeholder IPFS URI (can be blank, no cost)
      const tx = await contract.mintPassport("ipfs://QmDummyHash");
      await tx.wait();
      setStatus("Passport minted successfully 🎉");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error minting passport");
    }
  }


  async function addSkill() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, SkillPassport.abi, signer);

      // Assuming tokenId = 1 (first minted passport)
      const tx = await contract.addSkill(
        1,
        skill.name,
        skill.description,
        skill.proof
      );
      await tx.wait();
      setStatus("Skill added successfully ✅");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error adding skill");
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Skill Passport DApp</h1>

      {!account && (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Connect Wallet
        </button>
      )}
      {account && <p>Connected: {account}</p>}

      <button
        onClick={mintPassport}
        className="mt-4 bg-purple-600 text-white p-2 rounded"
      >
        Mint Passport
      </button>

      <div className="mt-5">
        <h2 className="font-semibold">Add Skill</h2>
        <input
          type="text"
          placeholder="Skill name"
          className="border p-1 m-1"
          onChange={(e) => setSkill({ ...skill, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-1 m-1"
          onChange={(e) => setSkill({ ...skill, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Proof link"
          className="border p-1 m-1"
          onChange={(e) => setSkill({ ...skill, proof: e.target.value })}
        />
        <button
          onClick={addSkill}
          className="mt-2 bg-green-500 text-white p-2 rounded"
        >
          Add Skill
        </button>
      </div>

      <p className="mt-4">{status}</p>
    </div>
  );
}
