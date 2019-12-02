import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states-manufacturing',
  templateUrl: './states-manufacturing.component.html',
  styleUrls: ['./states-manufacturing.component.scss']
})
export class StatesManufacturingComponent implements OnInit {

   title: string = 'Manufacturing Establishments by State';
   multi: any[];
   view: any[] = [700, 400];
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend: boolean = true;
   legendTitle: string = 'Manufacturing';
   showXAxisLabel = true;
   xAxisLabel = 'No of Establishments';
   showYAxisLabel = true;
   yAxisLabel = 'States';
   colorScheme = {
      name: 'cool',
      selectable: true,
      group: 'Ordinal',
      domain: [
         '#DD0066', '#FF7400' , '#FFCE00', '#0B9822', '#043869', 
         '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
         '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
         '#b50052'
      ]      
   };
   single = [
      {
         "name": "Johor",
         "value": 9483
      },
      {
         "name": "Kedah",
         "value": 3675
      },
      {
         "name": "Kelantan",
         "value": 1956
      },
      {
         "name": "Melaka",
         "value": 1629
      },
      {
         "name": "N Sembilan",
         "value": 2112
      },
      {
         "name": "Pahang",
         "value": 1958
      },
      {
         "name": "Perak",
         "value": 4642
      },
      {
         "name": "Perlis",
         "value": 425
      },
      {
         "name": "P Pinang",
         "value": 5269
      },
      {
         "name": "Sabah",
         "value": 2183
      },
      {
         "name": "Sarawak",
         "value": 3579
      },
      {
         "name": "Selangor",
         "value": 13915
      },
      {
         "name": "Terengganu",
         "value": 2119
      },
      {
         "name": "Kuala Lumpur",
         "value": 6918
      },
      {
         "name": "Labuan",
         "value": 137
      },
      {
         "name": "Putrajaya",
         "value": 21
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
