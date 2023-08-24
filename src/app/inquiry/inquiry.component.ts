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

  isFormSubmitted = false; // Add this line

  submitForm(form: NgForm) {
    if (form.valid) {
      // Perform form submission logic
      this.isFormSubmitted = true; // Set the flag to show the success message
      form.resetForm(); // Reset the form
    }
  }
}


