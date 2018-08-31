import { Component } from '@angular/core';
import { Reimbursement } from './reimbursement';
import { IMyOptions, IMyDateRangeModel } from 'mydaterangepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Reimbursement calculator';
  model = new Reimbursement();
  dateRange : IMyDateRangeModel;

  rangePickerOptions: IMyOptions = {
      // other options...
      dateFormat: 'mm/dd/yyyy',
  };

  onDateRangeChanged(event: IMyDateRangeModel) {
      this.dateRange = event;
      let millisecondsPerDay = 24 * 60 * 60 * 1000
      let days = (event.endJsDate.valueOf() - event.beginJsDate.valueOf()) / millisecondsPerDay + 1
      this.model.per_diem.days = days
      this.model.firstDay = event.beginJsDate
      this.model.lastDay = event.endJsDate
  }
}
