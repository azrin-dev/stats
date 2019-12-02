import { Component, OnInit } from '@angular/core';
import { LineChartService } from './line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit { 

   multi: any[];
   view: any[] = [700, 400];
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend: boolean = false;
   legendTitle: string = '';
   showXAxisLabel = true;
   xAxisLabel = '';
   showYAxisLabel = false;
   yAxisLabel = '';
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
   useAnimation: boolean = true;
   rangeFillOpacity: number = 0.15;
   legendPosition = 'right';
   roundDomains: boolean = false;
   showshowGridLines: boolean = true;
   showDataLabel: boolean = true;
   timeline: boolean = true;
   single: any;
   autoscale: boolean = true;

  constructor(
     private lineChartService: LineChartService
  ) { }

  ngOnInit() {
     this.lineChartService.startGenerator();
     this.lineChartService.dataYasObs.subscribe(
        (response: any) => {
           console.log(response);
           this.single = { name: 'api', series: [ { value: response }]};
        }
     )

     this.lineChartService.getFakeData().subscribe(
        (response) => {
           console.log(response);
        }
     )
  }

}
