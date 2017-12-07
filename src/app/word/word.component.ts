import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  en: string = 'Hello';
  vn: string = 'Xin Chao';
  imageUrls = '../../favicon.ico';
  forgot = true;

  toggleForgot() {
    this.forgot = !this.forgot;
  }
  name = '';
  showEvent(event) {
    this.name = event.target.value;
  }
  name2 = '';
  name22 = '';

  isHightlight = true;

  currentStyle = {color:'red',fontSize:'30px'};

  even = {color:'red',fontSize:'30px'};
  odd = {color:'black',fontSize:'30px'};

  currentClass = {circle:true,square:true};
  

  constructor() { }

  ngOnInit() {
  }

}
