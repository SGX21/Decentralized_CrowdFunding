// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected; 
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns; 
    uint256 public numberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title,
         string memory _description, uint256 _target, uint256 _deadline) 
         public returns (uint256) {
            require(_deadline > block.timestamp, "The deadline should be a date in the future");

            Campaign storage campaign = campaigns[numberOfCampaigns];
            campaign.owner = _owner;
            campaign.title = _title;
            campaign.description = _description;
            campaign.target = _target;
            campaign.deadline = _deadline;
            campaign.amountCollected = 0;
            
            numberOfCampaigns++;

            return numberOfCampaigns - 1;
        }

    function donateToCampaign(uint256 _id) public payable {
    require(_id < numberOfCampaigns, "Invalid campaign ID");

    Campaign storage campaign = campaigns[_id];
    require(block.timestamp <= campaign.deadline, "Campaign deadline has passed");
    require(msg.value > 0, "Donation amount must be greater than 0");

    campaign.donators.push(msg.sender);
    campaign.donations.push(msg.value);

    (bool success, ) = payable(campaign.owner).call{value: msg.value}("");
    if (!success) {
        // Handle transfer failure or reentrancy here
        // You can log an event or take other actions if needed
        revert("Donation failed");
    }

    campaign.amountCollected += msg.value;
}

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        require(_id < numberOfCampaigns, "Invalid campaign ID");

        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }
        return allCampaigns;
    }
}
