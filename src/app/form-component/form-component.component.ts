import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  quotes: { name: string, email: string, quote: string, status: string }[] = []

  message: string;
  @ViewChild('form') signupForm: ElementRef
  quoteStatus = ''
  constructor(private frmService: FormService) { }

  ngOnInit(): void {
    this.quotes = this.frmService.quotes
  }
  onSubmitForm() {
    // console.log(this.signupForm)
  }
  onSubmitValues(name: any, emailAddress: any, status: any) {
    console.log(name.value, emailAddress.value, status.value)
    let newUser = {
      name: name.value,
      email: emailAddress.value,
      quote: this.message,
      status: status.value
    }
    this.quotes.push(newUser)
  }
  getStatusQoute(quoteStatus: { status: string }) {
    return {
      'list-group-item-success': quoteStatus.status === 'upvote',
      'list-group-item-danger': quoteStatus.status === 'downvote'
    }
  }
  onDeleteQuote(quoteDelete: []) {
    console.log(quoteDelete)
    this.quotes.splice(0, 1)
  }

}
