import { Component, Input } from '@angular/core';
import { MultiLineItem } from './multi-line-item';

@Component({
  selector: 'multi-line-item',
  templateUrl: './multi-line-item.component.html',
  styleUrls: ['./multi-line-item.component.css']
})
export class MultiLineItemComponent {
  total = 0
  @Input()
  model: MultiLineItem;

  addLine() {
    this.model.addLine();
  }

  removeLine(line) {
    this.model.removeLine(line);
  }
}
