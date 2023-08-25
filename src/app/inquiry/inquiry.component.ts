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
  submitButtonText = 'Submit';

  submitForm(form: NgForm) {
    if (form.valid) {
      this.isFormSubmitted = true;
      this.submitButtonText = 'Submit again!';
    }
  }

  clearForm() {
    this.isFormSubmitted = false;
    this.submitButtonText = 'Submit';
    this.formData = {
      name: '',
      email: '',
      enquiry: ''
    };
  }
}
