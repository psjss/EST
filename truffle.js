module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas:6000000
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby network id
      gas:6000000,
      from:"0x6f5e9486228F29A48D065F5A27888A31230A3C88"
    }
  }
};