import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';


const routersConfig: Routes = [{
  path: 'contacts', component: ContactsComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routersConfig),
    CommonModule
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsModule { }
