const PancakeRouterV2 = artifacts.require("PancakeRouterV2");


let weth = "0x0000000000000000000000000000000000001000";
let factory = "0x65BD2c527E75664C2f64be47Ca68734D45D375C9";

module.exports = function(deployer) {
    
    deployer.deploy(PancakeRouterV2, factory, weth);
};
