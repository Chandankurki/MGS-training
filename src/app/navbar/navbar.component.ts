import { Component, OnInit, ViewChild } from '@angular/core';
// import { Observable } from 'rxjs';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
// import { SortDescriptor } from '@progress/kendo-data-query';
// import { categories } from '../data.categories';
// import { ProductService } from '../product.service';

import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { employees } from '../employees';
import { images } from '../images';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent{
  title = 'demo';
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
  // public dropDownItems = categories;
  // public defaultItem = { text: 'Filter by Category', value: null };

  // // // used for the Grid
  // public gridItems!: Observable<GridDataResult>;
  // public pageSize: number = 10;
  // public skip: number = 1;
  // public sortDescriptor: SortDescriptor[] = [];
  
  
  
  // public filterDescriptor: FilterDescriptor[] = [];
  // public filterTerm: number | null = null;

  // constructor(private service: ProductService) {
  //     this.loadGridItems();
  // }

  // public pageChange(event: PageChangeEvent): void {
  //     this.skip = event.skip;
  //     this.loadGridItems();
  // }

  // private loadGridItems(): void {
  //     this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
  // }

  // public handleSortChange(descriptor: SortDescriptor[]): void {
  //  console.log(descriptor);
   
  //     this.sortDescriptor = descriptor;
  //     this.loadGridItems();
  // }

  // public handleFilterChange(item: { text: string; value: number | null }): void {
  //     this.filterTerm = item.value;
  //     this.skip = 0;
  //     this.loadGridItems();
  // }



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

  public photoURL(dataItem: { img_id: string; gender: string }): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: { [Key: string]: string } = images;

    return image[code];
  }

  public flagURL(dataItem: { country: string }): string {
    const code: string = dataItem.country;
    const image: { [Key: string]: string } = images;

    return image[code];
  }

}


