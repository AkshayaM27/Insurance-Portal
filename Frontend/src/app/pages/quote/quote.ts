import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InsuranceApi } from '../../services/insurance-api';

@Component({
  selector: 'app-quote',
  imports: [FormsModule, CommonModule],
  templateUrl: './quote.html',
  styleUrl: './quote.css'
})
export class QuoteComponent {
  carModel = '';
  carValue = 0;
  carAge = 0;
  quote: any = null;

  constructor(private insuranceApi: InsuranceApi) {}

  getQuote() {
    const data = {
      carModel: this.carModel,
      carValue: this.carValue,
      carAge: this.carAge
    };

    this.insuranceApi.createQuote(data).subscribe({
      next: (response) => {
        this.quote = response;
      },
      error: () => {
        alert('Failed to calculate quote');
      }
    });
  }
}