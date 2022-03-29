const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log('publicKey: ', publicKey);
console.log('privateKey: ', privateKey);

/*
* publicKey:  04a338f76a5ac9a9b651b39c0375a582916c433f421749a2b7c58e33ef23367fad33e8701e809c1e112fbc2706e2144a1d7966ec782c6c5ad9f40a09ed76754ec2
* privateKey:  4d8272dc7a878011a3b36672d29ffa7b64fb620aa10e6f6de25456d49192aa0e
* */