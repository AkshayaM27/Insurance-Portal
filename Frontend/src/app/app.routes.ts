import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuoteComponent } from './pages/quote/quote';
import { ComparePlansComponent } from './pages/compare-plans/compare-plans';
import { BuyPolicy } from './pages/buy-policy/buy-policy';
import { UploadDocuments } from './pages/upload-documents/upload-documents';
import { TrackClaims } from './pages/track-claims/track-claims';
import { RenewInsurance } from './pages/renew-insurance/renew-insurance';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'compare-plans', component: ComparePlansComponent },
  { path: 'buy-policy', component: BuyPolicy },
  { path: 'upload-documents', component: UploadDocuments},
  { path: 'track-claims', component: TrackClaims },
  { path: 'renew-insurance', component: RenewInsurance }
];

