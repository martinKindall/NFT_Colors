import {Injectable} from "@angular/core";
import {ColorsContract} from "../ColorsContract";

@Injectable({
  providedIn: 'root',
})
export class ColorsFactory {

  public create(rawColorsContract: any): ColorsContract {
    const mint = (color: string) => Promise.resolve();
    const getColors = () => Promise.resolve(['color1', 'color2']);

    return {mint, getColors};
  }
}
