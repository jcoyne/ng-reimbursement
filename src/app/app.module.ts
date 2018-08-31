import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { AppComponent } from './app.component';
import { PerDiemComponent } from './per-diem.component';
import { MultiLineItemComponent } from './multi-line-item.component';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [
    AppComponent,
    PerDiemComponent,
    MultiLineItemComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
