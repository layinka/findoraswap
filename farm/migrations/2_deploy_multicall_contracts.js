
const Multicall = artifacts.require("Multicall");
const Multicall = artifacts.require("Multicall");


module.exports = function(deployer, _network, addresses) {
    
    deployer.deploy(Multicall);
    // deployer.deploy(PancakeRouterV2, factory, weth);
};