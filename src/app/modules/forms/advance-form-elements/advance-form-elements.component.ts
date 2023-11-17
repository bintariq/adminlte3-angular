import { Component, OnInit } from '@angular/core';
// import { Select2OptionData } from 'ng-select2';


@Component({
  selector: 'app-advance-form-elements',
  templateUrl: './advance-form-elements.component.html',
  styleUrls: ['./advance-form-elements.component.css']
})
export class AdvanceFormElementsComponent implements OnInit {
  public options:any;
  public value: string[] = [];
  public current!: string;
  exampleData:any;
  disableExampleData:any;
  state:any
  constructor() { }

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'alaska',
        text: 'Alaska'
      },
      {
        id: 'washington',
        text: 'Washington'
      },
      {
        id: 'texas',
        text: 'Texas'
      },
      {
        id: 'tennessee',
        text: 'Tennessee',
        disabled:true
      }
    ];
    this.value = ['alaska', 'washington'];

    this.disableExampleData = [
      {
        id: 'alaska',
        text: 'Alaska'
      },
      {
        id: 'washington',
        text: 'Washington'
      },
      {
        id: 'texas',
        text: 'Texas'
      },
      {
        id: 'tennessee',
        text: 'Tennessee',
        disabled:true
      }
    ];
    this.options = {
      multiple: true,
      tags: true
    };
  }

}
