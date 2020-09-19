
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'], 
})
export class AboutPage {
public tuitionFeeAmount: number;
public paymentTerms: number;
public totalInterestPayable: number; 
public totalAmount: number;
public monthlyPayment: number;

  constructor(public navCtrl: NavController) {

  }

solve() {
  this.totalInterestPayable=(this.tuitionFeeAmount * 0.0075) * this.paymentTerms;
  this.totalAmount= parseInt(this.tuitionFeeAmount) + parseInt(this.totalInterestPayable);
  this.monthlyPayment= (this.totalAmount / this.paymentTerms);
}

}
