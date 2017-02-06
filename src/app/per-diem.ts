export class PerDiem {
  constructor(
    public days: number,
    public rate: number
  ) {  }

  // The first and last day of travel get a 75% seimbursement
  // See https://www.gsa.gov/portal/content/101518
  get total() {
    let fullDays = 0, discountedDays = 0;
    switch(this.days) {
      case 0:
        break;
      case 1:
        discountedDays = 1
        break;
      default:
        fullDays = this.days - 2
        discountedDays = 2
    }

    return (fullDays * this.rate) + (discountedDays * this.rate * 0.75);
  }
}
