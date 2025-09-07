// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SkillPassport is ERC721URIStorage, ERC721Enumerable, Ownable {
    uint256 private _nextTokenId;

    struct Skill {
        string name;
        string description;
        string proofLink;
    }

    mapping(uint256 => Skill[]) private _skills;

    constructor() ERC721("SkillPassport", "SKILL") Ownable(msg.sender) {}

    function mintPassport(string memory _tokenURI) public returns (uint256) {
        uint256 newItemId = _nextTokenId;
        _nextTokenId++;

        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }
    
    function addSkill(uint256 tokenId, string memory name, string memory description, string memory proofLink) public {
        require(ownerOf(tokenId) == msg.sender, "Not your passport");
        _skills[tokenId].push(Skill(name, description, proofLink));
    }
    
    /**
     * @dev Retrieves all skills for a given passport.
     */
    function getSkills(uint256 tokenId) public view returns (Skill[] memory) {
        // CORRECTED LINE: This will revert the call if the token does not exist,
        // which serves as a reliable check.
        ownerOf(tokenId);
        return _skills[tokenId];
    }

    // --- Override Functions Required by Solidity ---

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
}