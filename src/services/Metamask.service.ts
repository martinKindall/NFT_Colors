import {Injectable} from "@angular/core";
import {WalletService} from "./WalletService";

// @ts-ignore
const Web3 = require('web3');

@Injectable({
  providedIn: 'root',
})
export class Metamask implements WalletService {

  public async init(): Promise<any> {
    let errMsg;

    // @ts-ignore
    const ethereum = window.ethereum;
    if (typeof ethereum !== 'undefined') {
      const web3 = new Web3(ethereum);
      await ethereum.enable();
      const netId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      const selectedAccount = accounts[0];

      if (typeof selectedAccount !== 'undefined') {
        console.log(selectedAccount);
        return Promise.resolve();
      } else {
        errMsg = 'Please login with MetaMask and connect the account to this site.';
        alert(errMsg);
        return Promise.reject({msg: errMsg});
      }
    } else {
      errMsg = 'Enable Metamask!';
      alert(errMsg);
      return Promise.reject({msg: errMsg});
    }
  }
}
