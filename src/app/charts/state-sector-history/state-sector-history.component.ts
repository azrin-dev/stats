import { Component, OnInit } from '@angular/core';
import { datas } from '../data';
import { ActivatedRoute } from '@angular/router';

export interface History { name: String, value: Number };

@Component({
  selector: 'app-state-sector-history',
  templateUrl: './state-sector-history.component.html',
  styleUrls: ['./state-sector-history.component.scss']
})
export class StateSectorHistoryComponent implements OnInit {

   title: string;

   multi: History[];
   view: any[] = [700, 400];
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = true;
   showLegend: boolean = true;
   legendTitle: string;
   showXAxisLabel = true;
   xAxisLabel = 'Establishment Classification';
   showYAxisLabel = true;
   yAxisLabel = 'Number of Establishments';
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
  
   datas; 
   single: any[];

  constructor(
     private activatedRoute: ActivatedRoute
  ) { 
      this.datas = datas;
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(
        (response: any) => {
            let state = response.state;            
            let sector = response.sector;
            this.title =`${sector} Establishment History for the State of ${state}`;
            
            this.legendTitle = sector;
            let datas = this.datas;
            let stateDatas = datas.reduce((acc, data) => {
               if(data.state.toLowerCase() === state) acc = data.period;
               return acc;
            }, {});

            let dataAcc = [];
            let data = stateDatas.reduce((acc, data) => {
               
               if(data[sector]) dataAcc.push({ name: `${data.year}`, value: data[sector]});
               acc = dataAcc;
               return acc;
            }, []);
            this.single = data.reverse();
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

}
