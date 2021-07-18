const {Blockchain, Transaction} = require('./blockchain');

let fredio = new Blockchain();
fredio.createTransaction(new Transaction('address1', 'address2', 100));
fredio.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
fredio.minePendingTransaction('fredio-address');

console.log('\n Balance of fredio is', fredio.getBalanceOfAddress('fredio-address'));

console.log('\n Starting the miner...');
fredio.minePendingTransaction('fredio-address');

console.log('\n Balance of fredio is', fredio.getBalanceOfAddress('fredio-address'));










