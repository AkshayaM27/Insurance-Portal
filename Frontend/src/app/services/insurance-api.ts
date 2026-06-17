import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceApi {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  createQuote(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/quotes`, data);
  }

  getQuotes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/quotes`);
  }


  getPlans() {
  return this.http.get<any[]>('http://localhost:8080/api/plans');
}

  buyPolicy(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/policies`, data);
  }

  getPolicies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/policies`);
  }

  getPolicyByVehicle(vehicleNumber: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/policies/vehicle/${vehicleNumber}`);
  }

  uploadDocument(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/documents`, data);
  }

  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/documents`);
  }

  createClaim(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/claims`, data);
  }

  getClaims(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/claims`);
  }

  getClaimById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/claims/${id}`);
  }

  renewPolicy(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/renewals`, data);
  }

  getRenewals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/renewals`);
  }
}