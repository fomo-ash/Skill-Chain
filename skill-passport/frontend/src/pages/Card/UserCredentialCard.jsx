import React from 'react';

// --- Embedded CSS Styles ---
// By placing the styles directly in the component, we avoid pathing issues.
const CardStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

    .card-container-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #1f1f3a, #1a1a2e);
      font-family: 'Inter', sans-serif;
    }
    
    .credential-card {
      width: 100%;
      max-width: 28rem;
      background-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border-radius: 1rem;
      border: 1px solid rgba(59, 130, 246, 0.3);
      box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      overflow: hidden;
      color: white;
    }
    
    .card-content {
      padding: 2rem;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
    
    .credential-label {
      font-size: 0.875rem;
      color: #60a5fa;
      font-weight: 500;
    }
    
    .user-name {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 0.25rem;
    }
    
    .logo-container {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(59, 130, 246, 0.1);
      border-radius: 9999px;
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
    
    .logo-container .icon {
      width: 1.25rem;
      height: 1.25rem;
      color: #60a5fa;
    }
    
    .details-section {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .detail-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .detail-text {
      font-size: 1.125rem;
      font-weight: 600;
      margin-top: 0.25rem;
    }
    
    .divider {
      border-color: rgba(51, 65, 85, 0.5);
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      border-style: solid;
      border-width: 0;
      border-top-width: 1px;
    }
    
    .id-container {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #0f172a;
      padding: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid #334155;
    }
    
    .unique-id {
      color: #22d3ee;
      font-family: 'Space Mono', monospace;
      font-size: 0.875rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .copy-button {
      padding: 0.5rem;
      color: #94a3b8;
      background: none;
      border: none;
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.2s ease-in-out;
    }
    
    .copy-button:hover {
      color: white;
      background-color: #334155;
    }
    
    .copy-button .icon {
      width: 1.25rem;
      height: 1.25rem;
    }
  `}</style>
);


// --- Reusable SVG Icons ---
const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const SkillChainIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);


const UserCredentialCard = ({ user }) => {

    const handleCopyToClipboard = async (idToCopy) => {
        if (!idToCopy) return;
        try {
            await navigator.clipboard.writeText(idToCopy);
            alert("Copied to clipboard!"); // In a real app, use a toast notification
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert("Failed to copy.");
        }
    };
    
    const defaultUser = {
        name: 'Alex Mercer',
        role: 'Lead Frontend Developer',
        details: 'ChainLink Fall 2025 - 1st Place Winner',
        uniqueId: '0x71C7656EC7ab88b098defB751B7401B5f68a52F8'
    };
    
    const userData = user || defaultUser;
    
    const truncateId = (id) => {
        if (!id || id.length < 14) return id;
        return `${id.substring(0, 6)}...${id.substring(id.length - 6)}`;
    }

    return (
        <div className="card-container-wrapper">
            <CardStyles /> {/* This component injects the CSS */}
            <div className="credential-card">
                <div className="card-content">
                    {/* Card Header */}
                    <div className="card-header">
                        <div>
                            <p className="credential-label">Verified Credential</p>
                            <h2 className="user-name">{userData.name}</h2>
                        </div>
                        <div className="logo-container">
                            <SkillChainIcon />
                        </div>
                    </div>

                    {/* Hackathon Details */}
                    <div className="details-section">
                        <div>
                            <label className="detail-label">Hackathon Role</label>
                            <p className="detail-text">{userData.role}</p>
                        </div>
                        <div>
                            <label className="detail-label">Hackathon Details</label>
                            <p className="detail-text">{userData.details}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="divider" />

                    {/* Unique ID Section */}
                    <div>
                        <label className="detail-label">Unique Credential ID</label>
                        <div className="id-container">
                            <p className="unique-id">
                                {truncateId(userData.uniqueId)}
                            </p>
                            <button onClick={() => handleCopyToClipboard(userData.uniqueId)} className="copy-button">
                                <CopyIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCredentialCard;