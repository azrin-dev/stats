import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

   title: string = 'Market Size of Establishments in Malaysia';
   subtitle: string = 'Statistical Data Analysis as of June 2019';
   content: string = 'Prepared by: Azrin Amin';

  constructor() { }

  ngOnInit() {
  }

}
