import { useState } from 'react';
import { ethers } from 'ethers';
import SkillPassportABI from '../contracts/SkillPassport.json'; // This is the full JSON object

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

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // <-- PASTE YOUR ADDRESS

  // This function now lives inside the dashboard
  const connectWalletAndLoadPassport = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      setStatus("Connecting to MetaMask...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();
      
      // THE FIX IS HERE: We now use SkillPassportABI.abi
      const skillPassportContract = new ethers.Contract(contractAddress, SkillPassportABI.abi, signer);

      setAccount(userAccount);
      setContract(skillPassportContract);

      setStatus("Wallet connected. Checking for your passport...");
      const hasPassport = await skillPassportContract.hasPassport(userAccount);
      if (hasPassport) {
        const balance = await skillPassportContract.balanceOf(userAccount);
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
      setStatus("Error connecting wallet. See console for details.");
    }
  };

  const mintPassport = async () => {
    if (!contract) return;
    try {
      setStatus("Minting passport... check MetaMask transaction.");
      const tx = await contract.mintPassport("ipfs://your-profile-metadata.json");
      await tx.wait();
      setStatus("Passport minted successfully! Refreshing...");
      // Re-load passport data after minting
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
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-right">
          <p className="text-gray-400">Logged in as</p>
          <p className="font-semibold">{user.email}</p>
        </div>
      </header>
      
      <main className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* If wallet is not connected, show the connect button */}
        {!account ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Manage Your On-Chain Skills</h2>
            <p className="text-gray-400 mb-6">Connect your MetaMask wallet to view, create, or update your Skill Passport.</p>
            <button
              onClick={connectWalletAndLoadPassport}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          // If wallet IS connected, show the passport management UI
          <div>
            <p className="text-gray-300 mb-4"><strong>Connected Wallet:</strong> {account}</p>
            {passportId ? (
              <div>
                <h3 className="text-xl font-bold mb-4">Your Passport ID: {passportId}</h3>
                <form onSubmit={addSkill} className="space-y-4 mb-8">
                  <input
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="Skill Name (e.g., Solidity)"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    value={skillDesc}
                    onChange={(e) => setSkillDesc(e.target.value)}
                    placeholder="Description (e.g., Wrote ERC721)"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Add Skill to Passport
                  </button>
                </form>

                <h4 className="text-lg font-semibold mb-2">Your Verifiable Skills:</h4>
                <div className="space-y-2">
                  {skills.length > 0 ? (
                    skills.map((skill, index) => (
                      <div key={index} className="bg-gray-700 p-3 rounded-md">
                        <strong>{skill.name}</strong>: {skill.description}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">No skills added yet.</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="mb-4 text-yellow-400">No Skill Passport found for this wallet.</p>
                <button onClick={mintPassport} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Mint Your Passport
                </button>
              </div>
            )}
          </div>
        )}

        {status && <p className="mt-4 text-center text-gray-400">{status}</p>}
      </main>
    </div>
  );
};

export default DashboardPage;