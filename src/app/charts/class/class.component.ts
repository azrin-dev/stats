import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

   multi: any[];
   view: any[] = [700, 400];
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend: boolean = true;
   legendTitle: string = 'Classifications';
   showXAxisLabel = true;
   xAxisLabel = 'Establishment Classification';
   showYAxisLabel = true;
   yAxisLabel = 'Number of Establishments';
   colorScheme = {
      name: 'cool',
      selectable: true,
      group: 'Ordinal',
      domain: ['#DD0066', '#FF7400' , '#FFCE00', '#0B9822', '#043869']      
   };
   single = [
      {
        "name": "Large",
        "value": 31136
      },
      {
        "name": "Medium",
        "value": 17568
      },
      {
        "name": "Small",
        "value": 230891
      },
      {
         "name": "Micro",
         "value": 899920
       }
   ];
   showDataLabel: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
      this.showDataLabel = !this.showDataLabel;
      if(this.showDataLabel){
      this.showDataLabel = true;
      }
      else{
         this.showDataLabel = false;
      }
   }

}
