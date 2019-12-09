import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../configs/services/charts-service/charts-service.service';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.scss']
})
export class RegressionComponent implements OnInit {  
   
   view: any[] = [700, 400];
   colorScheme = {
      name: 'cool',
      selectable: true,
      group: 'Ordinal',
      domain: ['#DD0066', '#FF7400' , '#FFCE00', '#0B9822', '#043869']      
   }; 
   results = "plotData";
   animations = "animations";
   legend = false;
   legendTitle = "legendTitle";
   legendPosition = "right";
   xAxis = false;
   yAxis = true;
   showXAxisLabel = false;
   showYAxisLabel = false;
   xAxisLabel = 'angle';
   yAxisLabel = 'radius';
   autoScale = true;
   showGridLines = true;
   tooltipDisabled = true;
   showSeriesOnHover = true;
   trimYAxisTicks = true;
   plotData;

  constructor(
     private chartsService: ChartsService
  ) { }

  ngOnInit() {
         let y = [56848, 56921, 53656, 54569].reverse();
         let x = [2019, 2018, 2017, 2016].reverse();
         let datas = { x, y };

      this.chartsService.linear(datas).subscribe(
         (response: any) => {

            console.log(response);

            let linearRegression = response.regression;  // regression: "f(x) = 1010.2 * x - 1982580"
            let linearScore      = response.score;       // score: { r: 0.7935199383339885, r2: 0.6296738925335769}
            let linearSlope      = response.slope;       // slope: 1010.2
            let linearIntercept  = response.intercept;   // intercept: -1982580

            const twoPi = 2 * Math.PI;
            const length = 25;
            const series = Array.apply(null, { length }).map((d, i) => {
               const x = i / (length - 1);
               const t = x * twoPi;
               return {
                  name: ~~(x * 360),
                  value: this.plotData
               };
            });

            this.plotData = series;

         }
      )
  }
  mathText = '3 - 1.5*sin(x) + cos(2*x) - 1.5*abs(cos(x))';
   mathFunction: (o: any) => any;
}
