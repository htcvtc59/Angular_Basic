import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value = 0;

  changeValue(isAdd: boolean) {
    if (isAdd) {
      this.value = this.value + 1;
    }
    else if (this.value === 0) {
      return;
    } else {
      this.value = this.value - 1;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
