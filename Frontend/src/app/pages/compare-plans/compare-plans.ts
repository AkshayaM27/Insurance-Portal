import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InsuranceApi } from '../../services/insurance-api';

@Component({
  selector: 'app-compare-plans',
  imports: [CommonModule, RouterLink],
  templateUrl: './compare-plans.html',
  styleUrl: './compare-plans.css'
})
export class ComparePlansComponent implements OnInit {
  plans: any[] = [];
  message = 'Loading plans...';

  constructor(private insuranceApi: InsuranceApi) {}

  ngOnInit() {
    this.insuranceApi.getPlans().subscribe({
      next: (response) => {
        console.log('Plans response:', response);
        this.plans = response;
        this.message = '';
      },
      error: (error) => {
        console.error('Plans error:', error);
        this.message = 'Unable to load plans from backend.';
      }
    });
  }
}