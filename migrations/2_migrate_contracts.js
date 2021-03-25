const TotemToken = artifacts.require("TotemToken");
const TotemNFT = artifacts.require("TotemNFT");
//const TotemAuction = artifacts.require("TotemAuction");

module.exports = async function(deployer) {
  
  await deployer.deploy(TotemNFT);
  const totemNFT = await TotemNFT.deployed()

  await deployer.deploy(TotemToken, totemNFT.address);
  const totemToken = await TotemToken.deployed()

  //await deployer.deploy(TotemAuction, totemNFT.address, totemToken.address);
};

