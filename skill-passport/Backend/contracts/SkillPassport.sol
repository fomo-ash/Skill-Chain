// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SkillPassport is ERC721URIStorage {
    uint256 private _tokenIds;

    struct Skill {
        string name;
        string description;
        string proofLink;
    }

    mapping(uint256 => Skill[]) private _skills;
    mapping(address => bool) private _hasPassport;

    constructor() ERC721("SkillPassport", "SKILL") {}

    function mintPassport(string memory tokenURI) public returns (uint256) {
        require(!_hasPassport[msg.sender], "You already have a passport");

        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _safeMint(msg.sender, newItemId);
        if (bytes(tokenURI).length > 0) {
            _setTokenURI(newItemId, tokenURI);
        }

        _hasPassport[msg.sender] = true;
        return newItemId;
    }

    function addSkill(
        uint256 tokenId,
        string memory name,
        string memory description,
        string memory proofLink
    ) public {
        require(ownerOf(tokenId) == msg.sender, "Not your passport");
        _skills[tokenId].push(Skill(name, description, proofLink));
    }

    /// 🆕 Update an existing skill
    function updateSkill(
        uint256 tokenId,
        uint256 skillIndex,
        string memory name,
        string memory description,
        string memory proofLink
    ) public {
        require(ownerOf(tokenId) == msg.sender, "Not your passport");
        require(skillIndex < _skills[tokenId].length, "Skill does not exist");

        _skills[tokenId][skillIndex] = Skill(name, description, proofLink);
    }

    /// 🆕 Remove a skill
    function removeSkill(uint256 tokenId, uint256 skillIndex) public {
        require(ownerOf(tokenId) == msg.sender, "Not your passport");
        require(skillIndex < _skills[tokenId].length, "Skill does not exist");

        uint256 lastIndex = _skills[tokenId].length - 1;
        if (skillIndex != lastIndex) {
            _skills[tokenId][skillIndex] = _skills[tokenId][lastIndex];
        }
        _skills[tokenId].pop();
    }

    function getSkills(uint256 tokenId) public view returns (Skill[] memory) {
        require(_ownerOf(tokenId) != address(0), "Passport does not exist");
        return _skills[tokenId];
    }

    function verifyPassport(uint256 tokenId) public view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }

    function hasPassport(address user) public view returns (bool) {
        return _hasPassport[user];
    }
}
