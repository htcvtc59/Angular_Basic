import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit, PipeTransform {

  transform(value: number,isUpper:boolean): number {
    if(isUpper) return Math.ceil(value);
    return Math.floor(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
