import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.less']
})
export class OrderPageComponent implements OnInit {
  private isFormVisible: boolean = false;
  private type: string;

  constructor() { }

  ngOnInit() {

  }

  onChoose(type: string){
    this.type = type;
    this.isFormVisible = true;
  }

  hidePopup(falz: boolean){
    this.isFormVisible = false;
  }

}
