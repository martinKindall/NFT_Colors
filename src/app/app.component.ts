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

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.walletService.init()
      .then(colorContract => {
        this.colorContract = colorContract;
        return colorContract.getColors();
      })
      .then((colors: string[]) => {
        this.colors = colors;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
