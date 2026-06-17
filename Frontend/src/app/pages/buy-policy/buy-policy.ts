import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InsuranceApi } from '../../services/insurance-api';

@Component({
  selector: 'app-buy-policy',
  imports: [FormsModule, CommonModule],
  templateUrl: './buy-policy.html',
  styleUrl: './buy-policy.css'
})
export class BuyPolicy implements OnInit {
  plans: any[] = [];
  message = '';
  savedPolicy: any = null;

  policy = {
    fullName: '',
    email: '',
    vehicleNumber: '',
    planName: 'Basic Plan'
  };

  constructor(private insuranceApi: InsuranceApi) {}

  ngOnInit() {
    this.insuranceApi.getPlans().subscribe({
      next: (response) => {
        this.plans = response;
      },
      error: () => {
        this.message = 'Unable to load plans.';
      }
    });
  }

  buyPolicy() {
    if (!this.policy.fullName || !this.policy.email || !this.policy.vehicleNumber || !this.policy.planName) {
      this.message = 'Please fill all fields.';
      return;
    }

    this.insuranceApi.buyPolicy(this.policy).subscribe({
      next: (response) => {
        this.savedPolicy = response;
        this.message = 'Policy purchased successfully.';
        this.policy = {
          fullName: '',
          email: '',
          vehicleNumber: '',
          planName: 'Basic Plan'
        };
      },
      error: () => {
        this.message = 'Failed to buy policy.';
      }
    });
  }
}