import { Component, OnInit } from '@angular/core';
import { TabPosition } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ngOnInit(): void {
  }
  sideBar: boolean = true;
  sidelogo: boolean = false;

  open() {
    this.sideBar = false;
    this.sidelogo = true;
  }
  close() {
    this.sideBar = true;
    this.sidelogo = false;
  }
  public listItems: Array<string> = [
    "Current",
  ];
  
  public country: Array<string> = [
    "INDIA",
  ];

  public period: Array<string> = [
    "Daily",
    "Weekly",
    "Monthly,"
  ];

  isShown: boolean = false;
  ispricing: boolean = false;

  chckBox() {
    this.isShown = !this.isShown;
  }

  pricing() {
    this.ispricing = !this.ispricing;
  }
}
