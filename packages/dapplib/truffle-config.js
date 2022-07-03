require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot already dash rural method give knife equal general'; 
let testAccounts = [
"0xa1b5b8deebba1561e716e2d80191a2f7fda9b6eee38a738374f723c1b91b5515",
"0xde465d39a4c5511a7133105b4be3f0c3fc1cad2a77270b944135662887c8d0ae",
"0x9fba9d64e7916a4462c163e0167770a1bb1dc9df62e7b2ed82a701b6c2e81cf0",
"0x30d4affdd2217f2d72b7186ad515227474a69eda89479684560b3ef1dfc8d681",
"0xbf5a22cf2a18b0e9fb711b9ad1e0e4548f41d1bdc38a8b8ebe966fe15f96b748",
"0x0f9d8c9d8d872bb511e9360b5e85d197cbc83a1d3dd7b94c2dd0ebb979622022",
"0x77a87238e0d2494bec86ae33c9b621501603469eba429e7d8c4e7e0060831979",
"0xa2e7db416d136cc2e8088cb6264dbc0607d5ded513e4524cb9af0dec2785e7a4",
"0x5544cce7daa8197a070408d1f0b4cf0e1507dd9bc4f370319b49fd0e7c85cacf",
"0x3c2d2f09812ecc09c41764bb30b6c831e06c6655b11e307628167c85ceda26b1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

