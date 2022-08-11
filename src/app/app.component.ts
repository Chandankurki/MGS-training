import { Component,ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

interface Item {
  text: string;
  icon: string;
  path: string;
  selected?: boolean;
}

@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',  
  // C:\Users\sunilkumar k r\OneDrive\Desktop\Project\Task-1\src\app\app.component.html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  sideBar: boolean = true;
  sidelogo: boolean = false;

    constructor(private router:Router) {
      this.items = this.mapItems(router.config as Item[]);
      this.items[0].selected = true;
    }
  public expanded = true;
  public items: Array<Item> = [];
  open() {
    this.sideBar = false;
    this.sidelogo = true;
  }
  close() {
    this.sideBar = true;
    this.sidelogo = false;
  }
  

  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: Item[]): Item[] {
    return routes.map((item) => {
      return {
        text: item.text,
        icon: item.icon,
        path: item.path ? item.path : "",
      };
    });
  }
}
