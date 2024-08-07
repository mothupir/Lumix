import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { WalletService } from './services/wallet.service';

interface Wallet {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, ButtonModule, ToolbarModule, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Lumix';

  wallets: Wallet[] | undefined;
  connected: boolean | undefined = true;

  selectedWallet: Wallet | undefined;

  constructor(private walletService: WalletService, private router: Router) {}

  ngOnInit() {
      this.wallets = [
          { name: 'MathWallet', code: 'MW' },
          { name: 'Talisman', code: 'TA' },
          { name: 'MetaMask', code: 'MM' },
          { name: 'Polkadot.js', code: 'PO' },
          { name: 'SubWallet', code: 'SW' },
          { name: 'Coinbase Wallet', code: 'CW' },
      ];
  }

  connect() {
    this.connected = this.connected ? false : true;

    if (!this.connected) {
      this.router.navigateByUrl('/home');
    }
  }

  goToDashboard() {
    console.log("Dashboard");
    this.router.navigateByUrl('/dashboard');
  }

  getYear() {
    return new Date().getFullYear();
  }
}
