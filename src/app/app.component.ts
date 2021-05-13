import {Component, OnInit} from '@angular/core';
import {WalletService} from "../services/WalletService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors: string[] | undefined;

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.walletService.init()
      .then()
      .catch(err => {
        console.error(err);
      });
  }
}
