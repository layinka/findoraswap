
const PancakeFactoryV2 = artifacts.require("PancakeFactoryV2");


module.exports = function(deployer, _network, addresses) {
    
    deployer.deploy(PancakeFactoryV2, addresses[0]);
    // deployer.deploy(PancakeRouterV2, factory, weth);
};
