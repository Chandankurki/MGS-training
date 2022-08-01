import { Component, OnInit } from '@angular/core';
import { AccountDetails } from 'src/app/pojo/account-details';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  allAccountDetails: AccountDetails[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
