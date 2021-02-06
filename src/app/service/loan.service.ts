import { Injectable } from '@angular/core';
import { Loan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  getSimpleIntrest(loan: Loan): number
  {
    return loan.amount * loan.period * loan.roi / 100;
  }
  getAmountPayable(loan: Loan): number
  {
    return (loan.amount + loan.simpleIntrest);
  }
}
