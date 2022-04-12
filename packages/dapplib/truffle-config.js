require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid clog tackle spray green note script uniform good enroll other squirrel'; 
let testAccounts = [
"0xf602118de83717897bfb7c4b556c672736ffd6f31232a9ca841506b51879f0d9",
"0x9ac1ccea48fa1f68c9ba66340d66c68e26000b0ac1fe97eb654ced32775b6687",
"0x880faf270c0f8942dd931ea99a40c4a7f885b0f06c4d084062a37fc22bfa999f",
"0x3cd2be43ad0e0d78e708a0cdf5a0d41c73e56868a0a98adf1ff36bed549aa8af",
"0xd2fb66631bcf2803c57de5e105cc96862884306984963a8abb78ede99a834ef7",
"0x64d28e1f9ee0d21ea5e02a60e8b80b182b7d3fafe370071a6b099ae2d1cc5ed5",
"0x692287aa7e0a6bc1d2a207a4b9d605d2e116e543fd4669839f5f075b2e7756ff",
"0xbc512383ce14f9c88d53edf9f5a291ad486151a14938d21697f4d52783caf8b1",
"0x55fb6913a4dea757900917cba9998d40e490fc9d84d184cb0e0590c8ce4cf862",
"0x0fad1ea954697fefa5b3400e8685e989df84b9bc2989348a02525ca601655911"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


