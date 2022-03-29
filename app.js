const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4d8272dc7a878011a3b36672d29ffa7b64fb620aa10e6f6de25456d49192aa0e')
const myWalletAddress = myKey.getPublic('hex');

let firat_chain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
firat_chain.addTransaction(tx1);


console.log("\nStarting the miner...");
firat_chain.minePendingTransactions(myWalletAddress);

console.log("\nBalance of firat_address: " + firat_chain.getBalanceOfAddress(myWalletAddress));

firat_chain.chain[1].transactions[0].amount = 1;

console.log("Is chain valid? " + firat_chain.isChainValid());