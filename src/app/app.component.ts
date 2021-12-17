import { Component, ElementRef, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') signupForm: ElementRef
  message: string;
  // name: string;
  // email: string;
  @ViewChild('name') name: ElementRef
  @ViewChild('email') email: ElementRef

  quotes = [
    {
      name: "crispu Njenga",
      email: "njengacs@gmail.com",
      quote: "No pain no gain"
    },
    {
      name: "Levis Oleguna",
      email: "oleguna@gmail.com",
      quote: "Hardwork Pays"
    },
    {
      name: "Kioko masaai",
      email: "masaai@gmail.com",
      quote: "focus on future"
    }
  ]

  onSubmitForm() {
    console.log(this.signupForm)
  }
  onSubmitValues() {
    let newUser = {
      name: this.name.nativeElement.value,
      email: this.email.nativeElement.value,
      quote: this.message
    }
    this.quotes.push(newUser)
  }
}
