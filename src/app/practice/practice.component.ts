import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  editAddress:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public editAddressFn(show){
    this.editAddress = show;
  }

}
