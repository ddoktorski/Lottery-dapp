# Lottery dApp

Lottery decentralized app built on top of Ethereum with UI written in React. The app uses [Chainlink VRF](https://docs.chain.link/vrf/v2/introduction/) to get randomness.

The contract has been deployed to the Sepolia testnet: 
https://sepolia.etherscan.io/address/0xf17470774b81039B55cd02f0A9851e7A250FF973


## Development

Run contract tests.

```sh
$ cd truffle
$ truffle test
```

Start the react dev server.

```sh
$ cd client
$ npm start
```

In order to deploy the contract follow [Infura documentation](https://docs.infura.io/infura/tutorials/ethereum/deploy-a-contract-using-truffle).

