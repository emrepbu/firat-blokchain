# simple blockchain

> node app.js
```
> node app.js
Mining block 1...
Block mined: 0004bc08d39145bd3a8f2ea5c48abe108b4cdd0960bc86a90bb32d4f3ec32083
Mining block 2...
Block mined: 002c24051ba10e9d4459bd3bb494497e27b7b5b434a77dff2e834c7bde64e133
Mining block 3...
Block mined: 0045396a08b4c875712186b6cf3c3f6005158509f90d41724f0eff718b9680fb
Mining block 4...
Block mined: 00bf26186887cd6b66b9c83f78476126628c0f456c48c8d70743913bdc2c7410
{
    "chain": [
        {
            "index": 0,
            "timestamp": "01/01/1970",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "660fd1187df077a603be7149c3ffc9be3af6dd77b453dda44fbba3c5ef6274f3",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "01/01/2017",
            "data": {
                "amount": 4
            },
            "previousHash": "660fd1187df077a603be7149c3ffc9be3af6dd77b453dda44fbba3c5ef6274f3",
            "hash": "0004bc08d39145bd3a8f2ea5c48abe108b4cdd0960bc86a90bb32d4f3ec32083",
            "nonce": 157
        },
        {
            "index": 2,
            "timestamp": "01/01/2018",
            "data": {
                "amount": 1
            },
            "previousHash": "0004bc08d39145bd3a8f2ea5c48abe108b4cdd0960bc86a90bb32d4f3ec32083",
            "hash": "002c24051ba10e9d4459bd3bb494497e27b7b5b434a77dff2e834c7bde64e133",
            "nonce": 555
        },
        {
            "index": 3,
            "timestamp": "01/01/2019",
            "data": {
                "amount": 2
            },
            "previousHash": "002c24051ba10e9d4459bd3bb494497e27b7b5b434a77dff2e834c7bde64e133",
            "hash": "0045396a08b4c875712186b6cf3c3f6005158509f90d41724f0eff718b9680fb",
            "nonce": 91
        },
        {
            "index": 4,
            "timestamp": "01/01/2020",
            "data": {
                "amount": 3
            },
            "previousHash": "0045396a08b4c875712186b6cf3c3f6005158509f90d41724f0eff718b9680fb",
            "hash": "00bf26186887cd6b66b9c83f78476126628c0f456c48c8d70743913bdc2c7410",
            "nonce": 52
        }
    ],
    "difficulty": 2
}

```
