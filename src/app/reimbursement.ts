
import { LineItem } from './line-item';
import { MultiLineItem } from './multi-line-item';
import { PerDiem } from './per-diem';

export class Reimbursement {
  public airfare: LineItem;
  public registration: LineItem;
  public car: LineItem;
  public hotel: LineItem;
  public per_diem: PerDiem;
  constructor () {
    this.airfare = new LineItem(0);
    this.registration = new LineItem(0);
    this.car = new MultiLineItem();
    this.hotel = new LineItem(0);
    this.per_diem = new PerDiem(0, 64);
  }

  get total() {
    return this.airfare.total + this.registration.total + this.car.total +
      this.hotel.total + this.per_diem.total;
  }
}
