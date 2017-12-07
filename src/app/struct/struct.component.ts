import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  isShow = true;

  arrSub = ['Angular', 'Nodejs', 'React'];

  arrWord = [
    { id: 1, en: 'action', vn: 'hanhdong', menorized: true },
    { id: 2, en: 'actor', vn: 'dien vien', menorized: true },
    { id: 3, en: 'activity', vn: 'hoatdong', menorized: false },
    { id: 4, en: 'bedroom', vn: 'phongngu', menorized: false },
    { id: 5, en: 'bath', vn: 'tam', menorized: true },
  ];

  newen = '';
  newvn = '';

  isshowForm = false;

  addnew() {
    this.arrWord.unshift({
      id: this.arrWord.length + 1,
      en: this.newen,
      vn: this.newvn,
      menorized: false
    });
    this.newen = '';
    this.newvn = '';
    this.isshowForm = !this.isshowForm;
  }

  removeWord(id: number) {
    const index = this.arrWord.findIndex(e => e.id === id);
    this.arrWord.splice(index, 1);
  }

  filterStatus = 'XEM_TAT_CA';

  getShowStatus(menorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_TU_DA_NHO' && menorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !menorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }

  constructor() { }

  ngOnInit() {
  }

}
