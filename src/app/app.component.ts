import { Component } from '@angular/core';
import { PerDiem } from './per-diem';

export class LineItem {
  constructor(
    public total: number
  ) {}
}

export class Reimbursement {
  public airfare: LineItem;
  public registration: LineItem;
  public car: LineItem;
  public hotel: LineItem;
  public per_diem: PerDiem;
  constructor () {
    this.airfare = new LineItem(0);
    this.registration = new LineItem(0);
    this.car = new LineItem(0);
    this.hotel = new LineItem(0);
    this.per_diem = new PerDiem(0, 64);
  }

  get total() {
    return this.airfare.total + this.registration.total + this.car.total +
      this.hotel.total + this.per_diem.total;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Reimbursement calculator';
  model = new Reimbursement();

}
