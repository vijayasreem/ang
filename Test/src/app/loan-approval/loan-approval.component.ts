import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-approval',
  templateUrl: './loan-approval.component.html',
  styleUrls: ['./loan-approval.component.css']
})
export class LoanApprovalComponent implements OnInit {
  loanApprovalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loanApprovalForm = this.formBuilder.group({
      loanAmount: ['', [Validators.required, Validators.min(1000)]],
      loanTerm: ['', Validators.required],
      interestRate: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      termsAndConditions: ['', Validators.required]
    });
  }

  submitLoanApprovalForm() {
    if (this.loanApprovalForm.invalid) {
      return;
    }

    // Implement API call here to approve loans with the specific terms and conditions
  }
}