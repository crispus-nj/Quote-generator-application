import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  quotes: {name: string, email: string, quote: string, status: string}[]=[]

  message: string;
  // @ViewChild('name') name: ElementRef 
  // @ViewChild('email') email: ElementRef 
  @ViewChild('form') signupForm: ElementRef

  // emit event
  // @Output() userField =  new EventEmitter<{name: string, email: string, message: string}>();

  constructor(private frmService: FormService) { }

  ngOnInit(): void {
    this.quotes = this.frmService.quotes
    // console.log(this.quotes)
    // console.log(this.frmService.onLoadStatus())
  }
  onSubmitForm() {
    console.log(this.signupForm)
  }
  onSubmitValues(name: any, emailAddress: any, status: any) {
    // console.log(name.value, emailAddress.value)
    let newUser = {
      name: name.value,
      email: emailAddress.value,
      quote: this.message,
      status: status.value
    }
    this.quotes.push(newUser)
  }
  getStatusQoute(quoteStatus: {status: string}){
    return {
      'list-group-item-success': quoteStatus.status === 'upvote',
      'list-group-item-danger' : quoteStatus.status === 'downvote'
    }
  }
 
}
