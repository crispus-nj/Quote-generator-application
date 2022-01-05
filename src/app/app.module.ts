import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponetComponent } from './footer-componet/footer-componet.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormService } from './form.service';
import { QuoteFilterStatusPipe } from './quote-filter-status.pipe';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'qoute', component: FormComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponetComponent,
    FormComponentComponent,
    QuoteFilterStatusPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
