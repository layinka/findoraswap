const Factory = artifacts.require('IPancakeFactory');
const Router = artifacts.require('PancakeRouterV2');
const Pair = artifacts.require('IPancakePair');
const Token1 = artifacts.require('MockBEP20');
const Token2 = artifacts.require('MockBEP20');

module.exports = async done => {
  try {
    //const [admin, _] = await web3.eth.getAccounts();
    const factory = await Factory.at('0x65BD2c527E75664C2f64be47Ca68734D45D375C9');
    const router = await Router.at('0xFce0ef9690eD67Bd48FDB2C01bddCC92240D4307');
    const token1 = await Token1.new('T1','T1', '10000000000000000000000000');
    const token2 = await Token2.new('T1','T1', '10000000000000000000000000');
    const pairAddress = await factory.createPair.call(token1.address, token2.address);
    const tx = await factory.createPair(token1.address, token2.address);
    await token1.approve(router.address, 10000);
    await token2.approve(router.address, 10000);
    await router.addLiquidity(
      token1.address,
      token2.address,
      9000,
      9000,
      10000,
      10000,
      '0x5A2770f69AF30370D60B416ad31FF538839112F6',
      Math.floor(Date.now() / 1000) + 60 * 10
    );
    const pair = await Pair.at(pairAddress);
    const balance = await pair.balanceOf("0x5A2770f69AF30370D60B416ad31FF538839112F6");
    console.log(`balance LP: ${balance.toString()}`);
  } catch (e) {
    console.log(e);
  }
  done();
};