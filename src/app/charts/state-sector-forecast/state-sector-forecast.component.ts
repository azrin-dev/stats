import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { datas } from 'src/app/charts/data'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface LineChartData { name: String, series: [ { value: Number, name: String }]};

@Component({
  selector: 'app-state-sector-forecast',
  templateUrl: './state-sector-forecast.component.html',
  styleUrls: ['./state-sector-forecast.component.scss']
})
export class StateSectorForecastComponent implements OnInit {

   title;
   chartSettings = {
      // Common Settings
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      legendTitle: 'Legend',
      legendPosition: 'right',
      showXAxisLabel: true,
      tooltipDisabled: false,
      showText: true,
      xAxisLabel: 'Country',
      showYAxisLabel: true,
      yAxisLabel: 'GDP Per Capita',
      showGridLines: true,
      innerPadding: '10%',
      barPadding: 8,
      groupPadding: 16,
      roundDomains: false,
      maxRadius: 10,
      minRadius: 3,
      showSeriesOnHover: true,
      roundEdges: true,
      animations: true,
      // xScaleMin: any,
      // xScaleMax: any,
      // yScaleMin: number,
      // yScaleMax: number,
      showDataLabel: false,
      noBarWhenZero: true,
      trimXAxisTicks: true,
      trimYAxisTicks: true,
      rotateXAxisTicks: true,
      maxXAxisTickLength: 16,
      maxYAxisTickLength: 16,
      // Line Settings 
      autoScale: true,
      timeline: false,
      colorScheme: {
         name: 'cool',
         selectable: true,
         group: 'Ordinal',
         domain: [
            '#DD0066', '#FF7400' , '#FFCE00', '#0B9822', '#043869', 
            '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
            '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
            '#b50052'
         ]      
      },
      view: [700, 400]
   };
   results;
   options;
   selectForm = new FormGroup({
      state: new FormControl('', Validators.required),
      sector: new FormControl('', Validators.required)
   })

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { 
         
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
         (response: any) => {
            let state = response.state;          
            let sector = response.sector;
            this.title = `${state} ${sector} sector growth` ;
            this.chartSettings.legendTitle = `${sector}`;
            let preData;
            let initData = datas.reduce((acc, data) => {
               if (data.state.toLowerCase() === state ) {
                  let stateData = data.period;
                  let sectorData = stateData.map((sectors) => {
                     let sectorsKey = Object.keys(sectors);
                     if(sectorsKey = sector) preData = { name: sectors.year, value: sectors[`${sectorsKey}`]};                     
                     return preData;
                  });                  
                  acc = sectorData;
               }
               return acc;
            }, []);
            initData.reverse();
            let results = [{ name: state, series: initData }];
            this.results = results;
         }
      );
      
      let states: any[]= datas.map((data) => {         
         return data.state;
      });

      let iSectors;
      let period = datas[0]['period'];
      [iSectors] = period;
      let sectorsKey = Object.keys(iSectors);
      sectorsKey.splice(0, 1);
      
      let options = { states: states, sectors: sectorsKey };
      this.options = options;
   }

   onSelect(){
      let value = this.selectForm.value;
      value.state = value.state.toLowerCase();
      this.router.navigate(['forecast', value.state, value.sector]);
   }

}


