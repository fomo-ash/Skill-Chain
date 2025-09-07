import { useState } from 'react';
import { ethers } from 'ethers';
import SkillPassportABI from '../contracts/SkillPassport.json';
import './DashboardPage.css'; // Import the new CSS file

const DashboardPage = ({ user }) => {
  // Web3 State
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  
  // App-specific State
  const [passportId, setPassportId] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillDesc, setSkillDesc] = useState('');
  const [status, setStatus] = useState('');

  // IMPORTANT: Paste your deployed contract address here
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const connectWalletAndLoadPassport = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      setStatus("Connecting to MetaMask...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();
      const skillPassportContract = new ethers.Contract(contractAddress, SkillPassportABI.abi, signer);

      setAccount(userAccount);
      setContract(skillPassportContract);

      setStatus("Wallet connected. Checking for your passport...");
      const hasPassport = await skillPassportContract.hasPassport(userAccount);
      if (hasPassport) {
        const balance = await contract.balanceOf(userAccount);
        if (balance > 0) {
          const userPassportId = await skillPassportContract.tokenOfOwnerByIndex(userAccount, 0);
          setPassportId(userPassportId.toString());
          await fetchSkills(skillPassportContract, userPassportId);
          setStatus("Passport found and skills loaded.");
        }
      } else {
        setStatus("No passport found for this wallet. Please mint one to begin.");
      }
    } catch (error) {
      console.error("Connection failed", error);
      setStatus("Error connecting wallet. Make sure you're on the Hardhat Localhost network.");
    }
  };

  const mintPassport = async () => {
    if (!contract) return;
    try {
      setStatus("Minting passport... check MetaMask transaction.");
      const tx = await contract.mintPassport("ipfs://your-profile-metadata.json");
      await tx.wait();
      setStatus("Passport minted successfully! Refreshing...");
      await connectWalletAndLoadPassport();
    } catch (error) {
      console.error(error);
      setStatus(`Error: ${error.reason || error.message}`);
    }
  };
  
  const addSkill = async (e) => {
    e.preventDefault();
    if (!contract || !passportId) return;
    try {
      setStatus(`Adding skill "${skillName}"...`);
      const tx = await contract.addSkill(passportId, skillName, skillDesc, "http://github.com/proof-link");
      await tx.wait();
      setStatus("Skill added successfully!");
      await fetchSkills(contract, passportId);
      setSkillName('');
      setSkillDesc('');
    } catch (error) {
      console.error(error);
      setStatus(`Error: ${error.reason || error.message}`);
    }
  };

  const fetchSkills = async (contractInstance, tokenId) => {
    try {
      const userSkills = await contractInstance.getSkills(tokenId);
      const formattedSkills = userSkills.map(skill => ({
        name: skill[0],
        description: skill[1],
        proofLink: skill[2]
      }));
      setSkills(formattedSkills);
    } catch (error) {
      console.error("Could not fetch skills", error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <p className="label">Logged in as</p>
          <p className="email">{user.email}</p>
        </div>
      </header>
      
      <main className="dashboard-main">
        {!account ? (
          <div className="connect-wallet-section">
            <h2>Manage Your On-Chain Skills</h2>
            <p>Connect your MetaMask wallet to view, create, or update your Skill Passport.</p>
            <button
              onClick={connectWalletAndLoadPassport}
              className="button button-primary"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="passport-details">
            <p><strong>Connected Wallet:</strong> {account}</p>
            {passportId ? (
              <div>
                <h3>Your Passport ID: <span className="passport-id">{passportId}</span></h3>
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
                  <button type="submit" className="button button-green">
                    Add Skill to Passport
                  </button>
                </form>

                <h4>Your Verifiable Skills:</h4>
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
              <div className="mint-container">
                <p>No Skill Passport found for this wallet.</p>
                <button onClick={mintPassport} className="button button-primary">
                  Mint Your Passport
                </button>
              </div>
            )}
          </div>
        )}

        {status && <p className="status-message">{status}</p>}
      </main>
    </div>
  );
};

export default DashboardPage;