import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {

   view: any[] = [700, 400];   
   results = [
      {
        "name": "Agriculture",
        "value": 19031
      },
      {
        "name": "Construction",
        "value": 81699
      },
      {
        "name": "Manufacturing",
        "value": 60021
      },
      {
        "name": "Mining",
        "value": 3273
      },
      {
        "name": "Services",
        "value": 520282
      },
      {
        "name": "Wholesale",
        "value": 495209
      }
    ];
   colorScheme = {
      domain: ['#E5E4E2', '#DD0066', '#FF7400' , '#FFCE00', '#0B9822', '#043869']
   };
   animations: boolean =  true;
   labels: boolean = true;
   trimLabels: boolean = true;
   maxLabelLength: number = 20;
   showLegend: boolean = true;
   legendTitle: string = 'Sectors';
   legendPosition: string = 'right';
   gradient: boolean = true;
   tooltipDisabled: boolean = false;
   explodeSlices: boolean = false;
   arcWidth: number = 1;

  constructor(
     private router: Router
  ) { }

  ngOnInit() {
  }

  sectorSelected(event: any){
     let link: any = event.name.toLowerCase();
     this.router.navigate(['states', link]);
  }

}
