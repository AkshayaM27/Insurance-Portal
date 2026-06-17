import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  plans = [
    {
      name: 'Basic Plan',
      price: 5000,
      coverage: 'Third-party damage',
      benefits: 'Low premium'
    },
    {
      name: 'Standard Plan',
      price: 8500,
      coverage: 'Third-party + own damage',
      benefits: 'Balanced protection'
    },
    {
      name: 'Premium Plan',
      price: 12000,
      coverage: 'Complete protection',
      benefits: 'Roadside assistance'
    }
  ];

  calculateQuote(carValue: number, carAge: number): number {
    let premium = carValue * 0.03;

    if (carAge > 5) {
      premium += 2000;
    }

    return Math.round(premium);
  }

  getPlans() {
    return this.plans;
  }

  savePolicy(policy: any) {
    localStorage.setItem('policy', JSON.stringify(policy));
  }

  getPolicy() {
    return JSON.parse(localStorage.getItem('policy') || 'null');
  }
}