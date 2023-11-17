import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {
  public navItems = navItems;
  constructor() { }

  ngOnInit(): void {
  }

}
