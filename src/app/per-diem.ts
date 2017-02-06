export class PerDiem {
  constructor(
    public days: number,
    public rate: number
  ) {  }

  get total() {
    return this.days * this.rate;
  }
}
