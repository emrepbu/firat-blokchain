const SHA256 = require("crypto-js/sha256");

class Transactions {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}


class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: " + this.hash + " WITH NONCE: " + this.nonce);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.pendTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block("01/01/1970", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(), this.pendTransactions);
        block.mineBlock(this.difficulty);

        console.log("BLOCK SUCCESSFULLY MINED!");
        this.chain.push(block);

        this.pendTransactions = [
            new Transactions(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction) {
        this.pendTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isChainValid() {
        for (let i = 1; i < this.chain; ++i) {

            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let firat_chain = new Blockchain();
firat_chain.createTransaction(new Transactions("address1", "address2", 100));
firat_chain.createTransaction(new Transactions("address2", "address1", 10));

console.log("\nStarting the miner...");
firat_chain.minePendingTransactions("firat_address");

console.log("\nBalance of firat_address: " + firat_chain.getBalanceOfAddress("firat_address"));


console.log("\nStarting the miner again...");
firat_chain.minePendingTransactions("firat_address");

console.log("\nBalance of firat_address: " + firat_chain.getBalanceOfAddress("firat_address"));


// console.log("Mining block 1...");
// firat_chain.addBlock(new Block("01/01/2017", {amount: 4}));
// console.log("Mining block 2...");
// firat_chain.addBlock(new Block("01/01/2018", {amount: 1}));

// console.log(JSON.stringify(firat_chain, null, 4));

