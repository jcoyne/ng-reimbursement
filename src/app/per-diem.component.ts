import { Component, Input } from '@angular/core';
import { PerDiem } from './per-diem';

@Component({
  selector: 'per-diem',
  templateUrl: './per-diem.component.html',
})
export class PerDiemComponent {
  total = 0
  @Input()
  model: PerDiem;
}
