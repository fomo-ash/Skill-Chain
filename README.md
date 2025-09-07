🛠️ Skill Passport – On-Chain Verifiable Skills
🚀 Problem We’re Solving

In the current hackathon and job world, there’s no single platform to verify real skills.

Anyone can claim they know Solidity, React, AI, or ML – but there’s no proof.

Centralized certification platforms (Coursera, Udemy, etc.) are expensive and rely on private databases. Employers need to contact them for verification.

Skills are scattered across GitHub, LinkedIn, portfolios, making verification hard.

This leads to fake resumes, inflated skills, and wasted opportunities for genuine talent.

💡 Our Solution – Skill Passport

We built an On-Chain Skill Passport App that lives in your MetaMask wallet.

Each user mints a Skill Passport NFT.

Users can add skills with description, project proof links, and roles.

Employers can instantly verify the authenticity of the skill (since it’s immutable on-chain).

Passport lives in the user’s wallet, not controlled by any centralized platform.

👉 In the future, endorsements from peers, organizations, and hackathons (like HackOdisha) can further strengthen proof of skills.

⚙️ Tech Stack

Frontend: React (Vite) + TailwindCSS

Backend: Node.js + Express + MongoDB (for auth & user mgmt)

Smart Contracts: Solidity + Hardhat + Ethers.js

Wallet Integration: MetaMask

🎯 Features

✅ User Signup/Login (JWT + cookies)
✅ Mint a Skill Passport NFT
✅ Add verifiable skills (stored on-chain)
✅ Connect MetaMask & view owned passport
✅ Employers can view and verify instantly

🔗 Ethereum Track Fit

This project fits the Ethereum track because:

Uses Ethereum smart contracts for trustless skill verification.

Each skill/passport is immutable & transparent on Ethereum.

Solves a real-world problem of fake resumes with blockchain as the backbone.

Challenges We Faced

Integrating backend auth with blockchain flow.

Managing contract redeployments & addresses while testing.

Handling CORS and cookie-based auth in frontend-backend connection.

Getting MetaMask to work smoothly with Hardhat local network.

🏆 Future Vision

Skill endorsements from peers & orgs.

Partnership with hackathons & DAOs.

AI-verification of proof links (GitHub commits, LinkedIn, etc.).

Cross-chain support (Polygon, Optimism, etc.).
