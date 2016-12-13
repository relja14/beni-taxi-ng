import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Order } from '../../../models/order';


@Component({
  selector: 'app-order-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.less'],
  providers: [Order]
})
export class FormPopupComponent implements OnInit {
  @Output() onHidePopup = new EventEmitter<boolean>();
  @Input() type: string;

  constructor(private order: Order) { 
    
  }

  ngOnInit() {
    this.order.type = this.type;
  }

  hidePopup(){
    this.onHidePopup.emit(true);
  }
  
}
