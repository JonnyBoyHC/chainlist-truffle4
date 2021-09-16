module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
          chainskills: {
               host: "localhost",
               port: 8545,
               network_id: "4224",
               gas: 4700000
               // from: '0x945096756312dF766887C309a9CFf98a15592898'
          },
          rinkeby: {
               host: "localhost",
               port: 8545,
               network_id: "4", // id_no reserved for rinkeby test network
               gas: 4700000
          }
     },
     compilers: {
          solc: {
               settings: {
                    optimizer: {
                         enabled: true,
                         runs: 200
                    }
               }
          }
     }
};
