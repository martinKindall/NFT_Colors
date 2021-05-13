import {Injectable} from "@angular/core";
import {WalletService} from "./WalletService";
import {ColorsContract} from "../ColorsContract";
import {ColorsFactory} from "./ColorsFactory.service";

// @ts-ignore
const ColorsJson = require('../../truffle/build/contracts/Color.json');
// @ts-ignore
const Web3 = require('web3');

@Injectable({
  providedIn: 'root',
})
export class Metamask implements WalletService {

  constructor(private colorsFactory: ColorsFactory) {
  }

  public async init(): Promise<ColorsContract> {
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
        const colorsContract = this.initColors(web3, netId, selectedAccount);
        return Promise.resolve(colorsContract);
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

  private initColors(web3: any, netId: number, selectedAccount: string): ColorsContract {
    const rawColorsContract = new web3.eth.Contract(ColorsJson.abi, ColorsJson.networks[netId].address);
    return this.colorsFactory.create(rawColorsContract, selectedAccount);
  }
}
