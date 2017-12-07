import { Component, OnInit,ViewChild } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit {
 
  @ViewChild(ViewchildChildComponent)
  myChid: ViewchildChildComponent
  onAddForChild(){
    this.myChid.value++;
  }

  constructor() { }

  ngOnInit() {
  }

}
