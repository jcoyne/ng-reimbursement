import {Reimbursement} from './reimbursement'
import * as numeral from 'numeral';

export class Report {
  constructor(
    public reimbursement: Reimbursement,
  ) {  }

  get dateRange(): String {
    if (!this.reimbursement.firstDay)
      return ''
    var locale = 'en-us'
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var first = this.reimbursement.firstDay.toLocaleString(locale, options)
    var last = this.reimbursement.lastDay.toLocaleString(locale, options)

    return `${first} - ${last}`
  }

  get hotel(): String {
    return numeral(this.reimbursement.hotel.total).format('$0,0.00')
  }

  get car(): String {
    return numeral(this.reimbursement.car.total).format('$0,0.00')
  }

  get airfare(): String {
    return numeral(this.reimbursement.airfare.total).format('$0,0.00')
  }

  get registration(): String {
    return numeral(this.reimbursement.registration.total).format('$0,0.00')
  }

  get perDiem(): String {
    return numeral(this.reimbursement.per_diem.total).format('$0,0.00')
  }

  get wifi(): String {
    return numeral(this.reimbursement.wifi.total).format('$0,0.00')
  }

  get total(): String {
    return this.reimbursement.display
  }
}
