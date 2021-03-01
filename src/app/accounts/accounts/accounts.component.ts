import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'app/services/accounts.service';
import { Account } from './Account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.findAll().subscribe((data) => {
      
      this.accounts = data;
      console.log(this.accounts);
    }, (err: Error) => {
      console.log(err)
    });
  }

}
