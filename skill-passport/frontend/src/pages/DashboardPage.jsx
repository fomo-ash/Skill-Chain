import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import SkillPassportABI from '../contracts/SkillPassport.json';
import UserCredentialCard from './Card/UserCredentialCard.jsx';
import './DashboardPage.css';

const DashboardPage = ({ user }) => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [passports, setPassports] = useState([]);
  const [status, setStatus] = useState('');
  
  // State for the new minting form
  const [projectRole, setProjectRole] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const connectWalletAndLoadData = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      setStatus("Connecting...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();
      const skillPassportContract = new ethers.Contract(contractAddress, SkillPassportABI.abi, signer);

      setAccount(userAccount);
      setContract(skillPassportContract);

      await fetchPassports(userAccount, skillPassportContract);
    } catch (error) {
      console.error("Connection failed", error);
      setStatus("Error connecting wallet.");
    }
  };

  const fetchPassports = async (userAccount, skillPassportContract) => {
    setStatus("Fetching passports...");
    const balance = await skillPassportContract.balanceOf(userAccount);
    if (balance > 0) {
      const passportData = [];
      for (let i = 0; i < balance; i++) {
        const tokenId = await skillPassportContract.tokenOfOwnerByIndex(userAccount, i);
        const tokenURI = await skillPassportContract.tokenURI(tokenId);
        
        // In a real app, you would fetch JSON from the tokenURI.
        // For now, we'll parse the mock data from the URI string.
        let parsedData = {};
        try {
          const jsonString = tokenURI.replace('data:application/json,', '');
          parsedData = JSON.parse(decodeURIComponent(jsonString));
        } catch (e) {
            // Fallback for older/unformatted URIs
        }

        passportData.push({
          id: tokenId.toString(),
          name: user.fullname,
          role: parsedData.role || `Role for Passport #${tokenId.toString()}`,
          details: parsedData.details || `Details for Passport #${tokenId.toString()}`,
          walletAddress: userAccount
        });
      }
      setPassports(passportData);
      setStatus(`Found ${passportData.length} passport(s).`);
    } else {
      setStatus("No passports found. Mint one to begin.");
    }
  };

  const handleMintPassport = async (e) => {
    e.preventDefault();
    if (!contract || !projectRole || !projectDetails) return alert("Please fill in all fields.");
    
    try {
      setStatus("Preparing passport metadata...");
      // Create metadata and URI on-the-fly
      const metadata = {
        name: `${user.fullname}'s Passport`,
        description: "A verifiable credential for project contributions.",
        role: projectRole,
        details: projectDetails
      };
      const tokenURI = `data:application/json,${encodeURIComponent(JSON.stringify(metadata))}`;

      setStatus("Minting new passport...");
      const tx = await contract.mintPassport(tokenURI);
      await tx.wait();
      setStatus("New passport minted successfully! Refreshing...");
      
      // Clear form and reload data
      setProjectRole('');
      setProjectDetails('');
      await fetchPassports(account, contract);
    } catch (error) {
      console.error(error);
      setStatus(`Error: ${error.reason || error.message}`);
    }
  };

  // Automatically connect wallet on component load
  useEffect(() => {
    if (user) {
      connectWalletAndLoadData();
    }
  }, [user]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <p className="label">Logged in as</p>
          <p className="email">{user.fullname}</p>
        </div>
      </header>
      
      <main className="dashboard-main">
        {!account ? (
          <div className="connect-wallet-section">
            <p>Please connect your wallet to continue.</p>
            <button onClick={connectWalletAndLoadData} className="button button-primary">Connect Wallet</button>
          </div>
        ) : (
          <div>
            <div className="skill-management">
              <h3>Enter Details for a New Skill Passport</h3>
              <form onSubmit={handleMintPassport} className="skill-form">
                <input 
                  value={projectRole} 
                  onChange={(e) => setProjectRole(e.target.value)} 
                  placeholder="Project Role (e.g., Lead Developer)" 
                  required 
                />
                <input 
                  value={projectDetails} 
                  onChange={(e) => setProjectDetails(e.target.value)} 
                  placeholder="Project Details (e.g., ChainLink Fall 2025 Winner)" 
                  required 
                />
                <button type="submit" className="button button-primary">Mint New Passport</button>

                <button type="submit" className='button button-primary'>Verify Your Claims</button>
              </form>
            </div>
            
            <hr style={{ border: '1px solid #374151', margin: '2rem 0' }} />

            <div className="passports-grid">
              {passports.length > 0 ? (
                passports.map(passport => (
                  <UserCredentialCard key={passport.id} passport={passport} />
                ))
              ) : (
                <p>You don't have any passports yet.</p>
              )}
            </div>
          </div>
        )}
        {status && <p className="status-message">{status}</p>}
      </main>
    </div>
  );
};

export default DashboardPage;