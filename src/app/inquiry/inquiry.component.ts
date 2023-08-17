import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent {
  formData = {
    name: '',
    email: '',
    enquiry: ''
  };

  submitForm(inquiryForm: NgForm) {
    if (inquiryForm.valid) {
      console.log('Form submitted:', this.formData);
      // Here you can add code to send the form data to your backend or perform other actions.
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}


