
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { employees } from '../employees';
import { images } from '../images';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./pending.component.css']

})
export class NavbarComponent{
  title = 'demo';
  sideBar: boolean = true;
  sidelogo: boolean = false;

    constructor(private router:Router){}
    
  open() {
    this.sideBar = false;
    this.sidelogo = true;
  }
  close() {
    this.sideBar = true;
    this.sidelogo = false;
  }
 
  @ViewChild(DataBindingDirective)
  dataBinding!: DataBindingDirective;
  public gridData: unknown[] = employees;
  public gridView!: unknown[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(input: Event): void {
    const inputValue = (input.target as HTMLInputElement).value;

    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "full_name",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "job_title",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "budget",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "phone",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "address",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

  public flagURL(dataItem: { country: string }): string {
    const code: string = dataItem.country;
    const image: { [Key: string]: string } = images;

    return image[code];
  }
}
