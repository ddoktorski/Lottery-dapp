var lottery = artifacts.require('Lottery');

module.exports = function(deployer) {
  deployer.deploy(lottery);
};