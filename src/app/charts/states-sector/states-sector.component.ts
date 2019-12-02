import { Component, OnInit } from '@angular/core';
import { datas } from '../data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-states-sector',
  templateUrl: './states-sector.component.html',
  styleUrls: ['./states-sector.component.scss']
})
export class StatesSectorComponent implements OnInit {

   title: string;
   multi: any[];
   view: any[] = [700, 400];
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend: boolean = true;
   legendTitle: string;
   showXAxisLabel = true;
   xAxisLabel = 'No of Establishments';
   showYAxisLabel = true;
   yAxisLabel = 'States';
   yAxisTicks;
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
   showDataLabel: boolean = false;
   single: any[];


  constructor(
         private activatedRoute: ActivatedRoute,
         private router: Router
  ) {
   }

  ngOnInit() { 

      this.activatedRoute.params.subscribe(
         (response: any) => {            
            let sector = response.sector; 
            this.title = `${sector} establishments by state`;
            this.legendTitle = sector;
            this.yAxisTicks = datas['state'];
            
            let k = [];
            let t = datas.reduce((acc, data) => {   
               
               k.push({ name: data.state, value: data.period[0][`${sector}`]});
               acc = k;
               return acc;

            }, []); 
            
            this.single = t;
         }
      )
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