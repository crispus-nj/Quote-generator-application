import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormService } from '../form.service';
import { Quote } from '../quote';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  allQuote: Quote[]= [
    // new Quote(1, "crispus Njenga", "njenga@gmail.com", "hardword pays", 0, 0),
    new Quote(1, "levis Ole", "Ole@gmail.com", "No pain No gain", 0, 0),
    new Quote(1, "Samuel Kioko", "Kioko@gmail.com", "Trust the process always", 0, 0),
    new Quote(1, "Marth", "martha@gmail.com", "The future belongs to those who are ready", 0, 0 )

  ]

  message: string;
  @ViewChild('form') signupForm: ElementRef
  quoteStatus = ''
  upvote = 0
  downvote = 0
  id = 0
  constructor(private frmService: FormService) { }

  ngOnInit(): void {
    this.allQuote 
  }
  onSubmitForm() {
    // console.log(this.signupForm)
  }
  onSubmitValues(name: any, emailAddress: any, status: any) {
    // console.log(name.value, emailAddress.value, status.value)
    let newUser = {
      id: this.id,
      name: name.value,
      email: emailAddress.value,
      quote: this.message,
      status: status.value,
      upvote: this.upvote,
      downvote: this.downvote
      // status: status.value
    }
    this.allQuote.push(newUser)
  }
  getStatusQoute(quoteStatus: { status: string }) {
    return {
      'list-group-item-success': quoteStatus.status === 'upvote',
      'list-group-item-danger': quoteStatus.status === 'downvote'
    }
  }
  onDeleteQuote(index: any ) {
    this.allQuote.splice(index, 1)
  }
  onAddUpvote(index: number){
    this.allQuote[index].upvote += 1 , index
  }
  onAddDownvote(index: number){
    this.allQuote[index].downvote += 1 
  }

}
