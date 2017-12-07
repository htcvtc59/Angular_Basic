import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name:'N1',age:10},
    {name:'N2',age:20},
    {name:'N3',age:30},
    {name:'N4',age:40}
  ];

  constructor() { }

  ngOnInit() {
  }

}
