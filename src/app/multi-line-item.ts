import { LineItem } from './line-item';

export class MultiLineItem {
  lines: Array<LineItem>
  constructor() {
    this.lines = [new LineItem(0)];
  }

  get total(): number {
      return this.lines.reduce((acc, elem) => acc + elem.total, 0);
  }

  addLine(): void {
    this.lines.push(new LineItem(0));
  }

  removeLine(line: LineItem): void {
    let i = this.lines.indexOf(line);
    if(i != -1) {
    	this.lines.splice(i, 1);
    }
  }
}
