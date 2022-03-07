# simple blockchain

> simple-blockchain@0.0.0 start ..\GitHub\simple blockchain
> node app.js

{
"chain": [
        {
            "index": 0,
            "timestamp": "01/01/1970",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "31daf957e419b65813992964d53b29bfb6c9639fac7ae9a28f298588a099d9d1"
        },
        {
            "index": 1,
            "timestamp": "01/01/2017",
            "data": {
                "amount": 4
            },
            "previousHash": "31daf957e419b65813992964d53b29bfb6c9639fac7ae9a28f298588a099d9d1",
            "hash": "9ebef3a239ab9ac8f4c148809ec7aabbb6be45431cdfa5893fe20fbb98902d9b"
        },
        {
            "index": 2,
            "timestamp": "01/01/2018",
            "data": {
                "amount": 1
            },
            "previousHash": "9ebef3a239ab9ac8f4c148809ec7aabbb6be45431cdfa5893fe20fbb98902d9b",
            "hash": "3e78e0d969afe56403111071039fd0b8a27dd4ac91dc5dbf891caeae694a2cea"
        }
    ]
}
