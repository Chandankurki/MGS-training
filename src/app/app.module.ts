import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import {
  GridModule,PDFModule,ExcelModule,} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import "hammerjs";
import { RatingComponent } from '../rating.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@drizm/buttons';
import { TooltipAllModule } from '@syncfusion/ej2-angular-popups';
import { AppComponent } from './app.component';
import { EditorModule } from '@progress/kendo-angular-editor';
import { CustomerComponent } from './customer/customer/customer.component';
import HomeComponent from './home.component';
import { ProductService } from './product.service';
import { employees } from './employees';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

const drawerRoutes = [
  {
    path: "home",
    component: HomeComponent,
    text: "Home",
    icon: "k-i-globe-outline",
  },
  {
    path: "products",
    component: CustomerComponent,
    text: "Products",
    icon: "k-i-cloud",
  },
  // {
  //   path: "about",
  //   component: employees,
  //   text: "About",
  //   icon: "k-i-question",
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RatingComponent,
    CustomerComponent,
    // PendingComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    DropDownsModule,
    DateInputsModule,
    FormsModule,
    ChartsModule,
    ButtonsModule,
    TooltipAllModule,
    EditorModule,
    LabelModule,
    RouterModule.forRoot(drawerRoutes),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: window.location.pathname,
    },
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
