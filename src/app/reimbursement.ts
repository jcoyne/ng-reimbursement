
import { LineItem } from './line-item';
import { MultiLineItem } from './multi-line-item';
import { PerDiem } from './per-diem';
import * as numeral from 'numeral';

export class Reimbursement {
  public airfare: LineItem;
  public registration: LineItem;
  public car: MultiLineItem;
  public wifi: MultiLineItem;
  public hotel: LineItem;
  public per_diem: PerDiem;
  constructor () {
    this.airfare = new LineItem(0);
    this.registration = new LineItem(0);
    this.car = new MultiLineItem();
    this.wifi = new MultiLineItem();
    this.hotel = new LineItem(0);
    this.per_diem = new PerDiem(0, 64);
  }

  get total() {
    return numeral(this.airfare.total).add(this.registration.total)
      .add(this.car.total).add(this.wifi.total)
      .add(this.hotel.total).add(this.per_diem.total).value();
  }
}
