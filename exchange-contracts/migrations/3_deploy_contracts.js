const PancakeRouterV2 = artifacts.require("PancakeRouterV2");


let weth = "0x0000000000000000000000000000000000001000";
let factory = "0x65BD2c527E75664C2f64be47Ca68734D45D375C9";

module.exports = function(deployer) {
    

    /**
     * 
     * To Deploy Router, first get INIT_CODE_PAIR_HASH from deployed Factory contract,
     * use this value to replace the value in the pairfor function 
     * line -  hex'b5ddb17968859aa42323083b0c8f548b0a56bbf2113ab44f7b006ba11f681397' // init code hash
     */
    deployer.deploy(PancakeRouterV2, factory, weth);
};
