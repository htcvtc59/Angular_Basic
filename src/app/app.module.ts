import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
