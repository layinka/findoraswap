const Erc20TokenContract = artifacts.require("Erc20TokenContract");



module.exports = function(deployer) {
    
    deployer.deploy(Erc20TokenContract, 'Token A1', 'TKNA1', '10000000000000000000000000');
    deployer.deploy(Erc20TokenContract, 'Token B1', 'TKNB1', '10000000000000000000000000');
};
