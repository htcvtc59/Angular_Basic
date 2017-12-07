import { Component, OnInit } from '@angular/core';
import { Promise } from 'q';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2017, 12, 1);
  person = {
    name: 'Tron',
    age: 20
  }
  // address = Promise.resolve('Hanoi');
  address = 'Hanoi';
  

  constructor() { }

  ngOnInit() {
  }

}
