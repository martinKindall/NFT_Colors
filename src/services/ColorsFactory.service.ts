import {Injectable} from "@angular/core";
import {ColorsContract} from "../ColorsContract";

@Injectable({
  providedIn: 'root',
})
export class ColorsFactory {

  public create(rawColorsContract: any, address: string): ColorsContract {
    const mint = (color: string) => rawColorsContract.methods.mint(color).send({
      from: address
    });
    const getColors = () => rawColorsContract.methods.getMintedColors().call();

    return {mint, getColors};
  }
}
