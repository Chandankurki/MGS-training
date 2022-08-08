import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import {
  GridModule,PDFModule,ExcelModule,} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";

import "hammerjs";
import { RatingComponent } from '../rating.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@drizm/buttons';

import { TooltipAllModule } from '@syncfusion/ej2-angular-popups';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RatingComponent
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
    TooltipAllModule

  ],
  providers: [],
})
export class AppModule { }
