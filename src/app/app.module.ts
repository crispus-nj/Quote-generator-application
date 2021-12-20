import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponetComponent } from './footer-componet/footer-componet.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponetComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
