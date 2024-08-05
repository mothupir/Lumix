import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

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

  selectedWallet: Wallet | undefined;

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

  }

  getYear() {
    return new Date().getFullYear();
  }
}
