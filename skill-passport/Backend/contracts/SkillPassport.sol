// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SkillPassport is ERC721, Ownable {
    uint256 public nextTokenId;

    struct Skill {
        string hackathonName;
        string projectName;
        string role;
        string githubLink;
    }

    mapping(uint256 => Skill) public skills;

    constructor() ERC721("SkillPassport", "SPASS") Ownable(msg.sender) {}

    function mintSkill(
        address recipient,
        string memory hackathonName,
        string memory projectName,
        string memory role,
        string memory githubLink
    ) public onlyOwner {
        uint256 tokenId = nextTokenId;
        _safeMint(recipient, tokenId);

        skills[tokenId] = Skill(
            hackathonName,
            projectName,
            role,
            githubLink
        );

        nextTokenId++;
    }

    function getSkill(uint256 tokenId) public view returns (Skill memory) {
        require(_exists(tokenId), "Skill does not exist");
        return skills[tokenId];
    }
}
