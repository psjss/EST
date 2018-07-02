var ESTToken = artifacts.require("./EraSwapToken.sol");
var ESTTokenSale = artifacts.require("./ESTTokenSale.sol");


module.exports = function(deployer) {
  deployer.deploy(ESTToken, 91000000000000000, "Era Swap Token", "EST").then(function(){
     console.log(ESTToken.address);
     deployer.deploy(ESTTokenSale, ESTToken.address, "0xF97D9fc484024F3379D51F422F843b194E9D41C5");
    });
 };