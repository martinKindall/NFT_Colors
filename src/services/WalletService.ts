import {ColorsContract} from "../ColorsContract";

export abstract class WalletService {
  abstract init(): Promise<ColorsContract>;
}
