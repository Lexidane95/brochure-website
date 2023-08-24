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

  isFormSubmitted = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.isFormSubmitted = true;
      form.resetForm();
    }
  }

  clearForm() {
    this.isFormSubmitted = false;
    this.formData = {
      name: '',
      email: '',
      enquiry: ''
    };
  }
}
