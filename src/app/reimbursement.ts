
import { LineItem } from './line-item';
import { MultiLineItem } from './multi-line-item';
import { PerDiem } from './per-diem';
import { Report } from './report';

import * as numeral from 'numeral';

export class Reimbursement {
  public who: string;
  public where: string;
  public airfare: LineItem;
  public registration: LineItem;
  public car: MultiLineItem;
  public wifi: MultiLineItem;
  public hotel: MultiLineItem;
  public per_diem: PerDiem;
  public report: Report;
  public firstDay: Date;
  public lastDay: Date;

  constructor () {
    this.airfare = new LineItem(0);
    this.registration = new LineItem(0);
    this.car = new MultiLineItem();
    this.wifi = new MultiLineItem();
    this.hotel = new MultiLineItem();
    this.per_diem = new PerDiem(0, 64);
    this.report = new Report(this)
  }

  get total() {
    return numeral(this.airfare.total).add(this.registration.total)
      .add(this.car.total).add(this.wifi.total)
      .add(this.hotel.total).add(this.per_diem.total).value();
  }

  get display(): String {
    return numeral(this.total).format('$0,0.00')
  }
}
