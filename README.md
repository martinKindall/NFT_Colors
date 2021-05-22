# Colors NFT

A Smart Contract programmed in Solidity, using the ERC-721 protocol, for minting NFT which contains unique colors in the Hexadecimal format.
Compatible with the Ethereum Blockchain, for learning purpouses only.

The proyect idea is based on this one from [Dapp University](https://github.com/dappuniversity/nft).

## Install

```bash
npm install 
cd truffle
npm install # yes, there are two package.jsons, one for the frontend and another for truffle
```

## Compile and Migrate Smart Contracts

First, make sure you are running a local Ethereum-compatible Blockchain, for example [Ganache](https://www.trufflesuite.com/ganache).
Verify that the _development_ network configured in __truffle-config.js__ matches your params, else modify them. 
Then, just execute _truffle_ commands:

```bash
cd truffle/
truffle compile
truffle migrate
```

## Run Truffle Tests

```bash
truffle test
```

## Launch Frontend Application

Go back to the root of the proyect, if not already there, and run:

```bash
cd ..
npm run start
```

Visit http://localhost:4200

## Connect Metamask to one of the Ganache Accounts

- Make sure you are running Ganache. Then pick the first account and copy its private key.
- Go to http://localhost:4200
- On Metamask, add a new Network, with URL http://localhost, 7545 as port and chain ID 1337. Use this network for development.
- Also in Metamask import an account -> specify the private key you copied from the Ganache first account. __Warning__: do not use this account as a real account.
- Reload the webapp. 
