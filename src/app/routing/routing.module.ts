import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsModule} from '../contacts/contacts.module'

import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routersConfig: Routes = [{
  path: 'detail/:id', component: ContactDetailComponent
},
{
  path: '', redirectTo: '/contacts', pathMatch: 'full'
},
{
  path: '**', component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    ContactsModule,
    RouterModule.forRoot(routersConfig),
    CommonModule
  ],
  declarations: [
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
