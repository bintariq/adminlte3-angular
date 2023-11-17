import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() visible:boolean = false;
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>();
  closePopup(){
    this.visible = false;
  }
}
