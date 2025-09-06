// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SkillPassport is ERC721URIStorage, ERC721Enumerable, Ownable {
    uint256 private _tokenIds;
    struct Skill {
        string name;
        string description;
        string proofLink;
    }

    mapping(uint256 => Skill[]) private _skills;
    mapping(address => bool) private _hasPassport;

    constructor() ERC721("SkillPassport", "SKILL") Ownable(msg.sender) {}

    // FIX #1: Renamed the parameter from "tokenURI" to "_tokenURI" to avoid shadowing
    function mintPassport(string memory _tokenURI) public returns (uint256) {
        require(!_hasPassport[msg.sender], "You already have a passport");
        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _safeMint(msg.sender, newItemId);
        if (bytes(_tokenURI).length > 0) {
            _setTokenURI(newItemId, _tokenURI);
        }

        _hasPassport[msg.sender] = true;
        return newItemId;
    }
    
    function addSkill(uint256 tokenId, string memory name, string memory description, string memory proofLink) public {
        require(ownerOf(tokenId) == msg.sender, "Not your passport");
        _skills[tokenId].push(Skill(name, description, proofLink));
    }
    
    // FIX #2: Replaced `require(_exists...` with a call to `ownerOf(tokenId)`
    function getSkills(uint256 tokenId) public view returns (Skill[] memory) {
        ownerOf(tokenId); // This will fail if the token does not exist, providing the same check
        return _skills[tokenId];
    }

    function hasPassport(address user) public view returns (bool) {
        return _hasPassport[user];
    }

    // --- Override Functions ---

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 amount)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, amount);
    }
}