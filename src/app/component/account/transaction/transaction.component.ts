import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionDetails } from 'src/app/pojo/transaction-details';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  customerId: string | null = "";
  accountId: number = 0;
  transactionHistory: TransactionDetails[] = [];
  
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.params['accountId'];
    this.customerService.transactionHistory(this.accountId).subscribe(data => {
      this.transactionHistory = data;
    });
    this.customerId = localStorage.getItem('key');
  }

  home() {
    this.router.navigate(['customer', this.customerId]);
  }

}
