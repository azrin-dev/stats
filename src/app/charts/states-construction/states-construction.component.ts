import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states-construction',
  templateUrl: './states-construction.component.html',
  styleUrls: ['./states-construction.component.scss']
})
export class StatesConstructionComponent implements OnInit {

   multi: any[];
   view: any[] = [700, 400];
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend: boolean = true;
   legendTitle: string = 'construction';
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
         "value": 9516
      },
      {
         "name": "Kedah",
         "value": 3719
      },
      {
         "name": "Kelantan",
         "value": 1604
      },
      {
         "name": "Melaka",
         "value": 3719
      },
      {
         "name": "N Sembilan",
         "value": 4144
      },
      {
         "name": "Pahang",
         "value": 3353
      },
      {
         "name": "Perak",
         "value": 5610
      },
      {
         "name": "Perlis",
         "value": 1179
      },
      {
         "name": "P Pinang",
         "value": 4799
      },
      {
         "name": "Sabah",
         "value": 6809
      },
      {
         "name": "Sarawak",
         "value": 6500
      },
      {
         "name": "Selangor",
         "value": 16878
      },
      {
         "name": "Terengganu",
         "value": 3288
      },
      {
         "name": "Kuala Lumpur",
         "value": 10804
      },
      {
         "name": "Labuan",
         "value": 277
      },
      {
         "name": "Putrajaya",
         "value": 40
      }
   ];
   showDataLabel: boolean = false;

  constructor(
     private router: Router
  ) { }

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

   onStateSelect(event){
      let stateSelected = event.name.toLowerCase().split(' ').join('-');
      this.router.navigate(['history', stateSelected, this.legendTitle]);
   }

}
