import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InsuranceApi } from '../../services/insurance-api';

@Component({
  selector: 'app-upload-documents',
  imports: [FormsModule, CommonModule],
  templateUrl: './upload-documents.html',
  styleUrl: './upload-documents.css'
})
export class UploadDocuments {
  message = '';
  savedDocument: any = null;
  documents: any[] = [];

  documentData = {
    vehicleNumber: '',
    documentType: 'RC Book',
    fileName: ''
  };

  constructor(private insuranceApi: InsuranceApi) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.documentData.fileName = file.name;
    }
  }

  uploadDocument() {
    if (!this.documentData.vehicleNumber || !this.documentData.documentType || !this.documentData.fileName) {
      this.message = 'Please enter vehicle number and select a file.';
      return;
    }

    this.insuranceApi.uploadDocument(this.documentData).subscribe({
      next: (response) => {
        this.savedDocument = response;
        this.documents.push(response);
        this.message = 'Document uploaded successfully.';
        this.documentData = {
          vehicleNumber: '',
          documentType: 'RC Book',
          fileName: ''
        };
      },
      error: () => {
        this.message = 'Failed to upload document.';
      }
    });
  }
}