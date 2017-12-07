import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {id:1,name:'name1',phoneNumber:'0123'},
    {id:2,name:'name2',phoneNumber:'0123'},
    {id:3,name:'name3',phoneNumber:'0123'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
