import {Component, OnInit} from '@angular/core';
import {WalletService} from "../services/WalletService";
import {ColorsContract} from "../ColorsContract";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorContract: ColorsContract | undefined;
  colors: string[] | undefined;
  colorInput: string;

  constructor(private walletService: WalletService) {
    this.colorInput = "#000000";
  }

  ngOnInit(): void {
    this.walletService.init()
      .then(colorContract => {
        this.colorContract = colorContract;
        return this.updateColors();
      })
      .catch(err => {
        console.error(err);
      });
  }

  mint() {
    if (!!this.colorInput && this.colorInput.length === 7) {
      this.colorContract?.mint(this.colorInput)
        .then(() => {
          return this.updateColors();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  updateColors(): Promise<any> {
    return this.colorContract?.getColors()
      .then((colors) => {
        this.colors = colors;
      }) || Promise.resolve();
  }
}
