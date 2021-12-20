import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  quotes: {name: string, email: string, quote: string}[]=[]

  message: string;
  @ViewChild('name') name: ElementRef 
  @ViewChild('email') email: ElementRef 
  @ViewChild('form') signupForm: ElementRef

  // emit event
  @Output() userField =  new EventEmitter<{name: string, email: string, message: string}>();

  constructor(private frmService: FormService) { }

  ngOnInit(): void {
    this.quotes = this.frmService.quotes
  }
  // quotes = [
  //   {
  //     name: "crispu Njenga",
  //     email: "njengacs@gmail.com",
  //     quote: "No pain no gain"
  //   },
  //   {
  //     name: "Levis Oleguna",
  //     email: "oleguna@gmail.com",
  //     quote: "Hardwork Pays"
  //   },
  //   {
  //     name: "Kioko masaai",
  //     email: "masaai@gmail.com",
  //     quote: "focus on future"
  //   }
  // ]

  onSubmitForm() {
    console.log(this.signupForm)
  }
  onSubmitValues(name: any, emailAddress: any) {
    // console.log(name.value, emailAddress.value)
    let newUser = {
      name: name.value,
      email: emailAddress.value,
      quote: this.message
    }
    this.quotes.push(newUser)
  }

}
