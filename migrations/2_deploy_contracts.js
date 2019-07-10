const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary).then(() => console.log('contract address', StarNotary.address));
};

// https://rinkeby.etherscan.io/address/0x274cFA426F1829A71F8bA2a48394Ad239e553627
// https://etherscan.io/tx/0x66deb8763b85b6b5f89209f1badae40ddc19f5089bbf42ec88eb4cb06316be29