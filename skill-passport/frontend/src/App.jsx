import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import SkillPassportABI from './contracts/SkillPassport.json'; // Updated path
import './App.css';

// PASTE THE CONTRACT ADDRESS YOU COPIED FROM THE DEPLOYMENT SCRIPT
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [passportId, setPassportId] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillDesc, setSkillDesc] = useState('');
  const [status, setStatus] = useState('');

  // Connects to the user's MetaMask wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();
      
      const skillPassportContract = new ethers.Contract(contractAddress, SkillPassportABI, signer);

      setAccount(userAccount);
      setContract(skillPassportContract);

      // Check if user already has a passport
      const hasPassport = await skillPassportContract.hasPassport(userAccount);
      if (hasPassport) {
        // A simple way to find the user's token ID. A real app would use events or a subgraph.
        const balance = await skillPassportContract.balanceOf(userAccount);
        if (balance > 0) {
          const userPassportId = await skillPassportContract.tokenOfOwnerByIndex(userAccount, 0);
          setPassportId(userPassportId.toString());
          fetchSkills(skillPassportContract, userPassportId);
        }
      }
    } catch (error) {
      console.error("Connection failed", error);
    }
  };
  
  // Mints the main Passport NFT
  const mintPassport = async () => {
    if (!contract) return;
    try {
      setStatus("Minting passport... check MetaMask.");
      const tx = await contract.mintPassport("ipfs://your-profile-metadata.json");
      await tx.wait();
      setStatus("Passport minted successfully!");
      // Re-fetch user data
      connectWallet();
    } catch (error) {
      console.error(error);
      setStatus(`Error: ${error.reason || error.message}`);
    }
  };

  // Adds a new skill to the passport
  const addSkill = async (e) => {
    e.preventDefault();
    if (!contract || !passportId) return;
    try {
      setStatus(`Adding skill "${skillName}"...`);
      const tx = await contract.addSkill(passportId, skillName, skillDesc, "http://github.com");
      await tx.wait();
      setStatus("Skill added successfully!");
      fetchSkills(contract, passportId); // Refresh the skills list
      setSkillName('');
      setSkillDesc('');
    } catch (error) {
      console.error(error);
      setStatus(`Error: ${error.reason || error.message}`);
    }
  };

  // Fetches the list of skills for a given passport ID
  const fetchSkills = async (contractInstance, tokenId) => {
    try {
      const userSkills = await contractInstance.getSkills(tokenId);
      setSkills(userSkills);
    } catch (error) {
      console.error("Could not fetch skills", error);
    }
  };


  return (
    <div className="App">
      <h2>🪪 Skill Passport</h2>
      {account ? (
        <div>
          <p>Connected: {account}</p>
          <hr />
          {passportId ? (
            <div>
              <h3>Your Passport ID: {passportId}</h3>
              <form onSubmit={addSkill} className="skill-form">
                <input 
                  value={skillName} 
                  onChange={(e) => setSkillName(e.target.value)} 
                  placeholder="Skill Name (e.g., Solidity)" 
                  required 
                />
                <input 
                  value={skillDesc} 
                  onChange={(e) => setSkillDesc(e.target.value)} 
                  placeholder="Description (e.g., Wrote ERC721)" 
                  required 
                />
                <button type="submit">Add Skill</button>
              </form>

              <h4>Your Skills:</h4>
              <div className="skills-list">
                {skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <strong>{skill.name}</strong>: {skill.description}
                    </div>
                  ))
                ) : (
                  <p>No skills added yet.</p>
                )}
              </div>
            </div>
          ) : (
            <button onClick={mintPassport}>Mint Your Passport</button>
          )}
          {status && <p className="status-message">{status}</p>}
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;
