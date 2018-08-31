import { Component, Input } from '@angular/core';
import { Report } from './report';

@Component({
  selector: 'report',
  templateUrl: './report.component.html'
})
export class ReportComponent {
  @Input()
  model: Report;
}
