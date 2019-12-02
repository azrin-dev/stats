import { Component, OnInit } from '@angular/core';
import { menu01 } from './menus-data';

export interface Menu {name: String, link: String, icon: String };
export interface MenuGroup { name: String, menus: Menu[] };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   menuGrp1: MenuGroup;

  constructor() { 
      this.menuGrp1 = menu01;
  }

  ngOnInit() {
  }

}
