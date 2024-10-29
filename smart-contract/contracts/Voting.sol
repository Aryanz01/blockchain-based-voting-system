pragma solidity ^0.8.0;

contract Voting {
    struct Party {
        string name;
        uint256 voteCount;
    }

    mapping(address => bool) public hasVoted;
    mapping(string => bool) private usedRollNumbers;
    mapping(uint256 => Party) public parties;
    uint256 public totalParties;

    uint256 public startTime;
    uint256 public endTime;

    constructor(uint256 _startTime, uint256 _endTime) {
        startTime = _startTime;
        endTime = _endTime;
    }

    function registerParty(string memory _name) public {
        parties[totalParties] = Party(_name, 0);
        totalParties++;
    }

    function vote(uint256 partyId, string memory rollNumber) public {
        require(block.timestamp >= startTime && block.timestamp <= endTime, "Voting not allowed at this time");
        require(!hasVoted[msg.sender], "You have already voted");
        require(!usedRollNumbers[rollNumber], "Roll number has already been used");

        hasVoted[msg.sender] = true;
        usedRollNumbers[rollNumber] = true;
        parties[partyId].voteCount++;
    }

    function declareWinner() public view returns (string memory) {
        require(block.timestamp > endTime, "Voting is still ongoing");

        uint256 maxVotes = 0;
        uint256 winnerId = 0;

        for (uint256 i = 0; i < totalParties; i++) {
            if (parties[i].voteCount > maxVotes) {
                maxVotes = parties[i].voteCount;
                winnerId = i;
            }
        }

        return parties[winnerId].name;
    }
}
