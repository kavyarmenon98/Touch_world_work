import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-field',
  templateUrl: './random-field.component.html',
  styleUrls: ['./random-field.component.css']
})
export class RandomFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  intRandomField=null
  lstItems=[]
  changeValue(){
    this.lstItems=[]
    for (let i=0 ;i<this.intRandomField*2;i++){
      this.lstItems.push({value:null})
    }

  }
}
