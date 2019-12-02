import { Component, OnInit } from '@angular/core';
import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.scss']
})
export class MindMapComponent implements OnInit {

   edges: Edge[];
   node;
   clusters: ClusterNode[];

  constructor() { 
      this.node = { data: { color: [
         '#DD0066', '#FF7400' , '#FFCE00', '#0B9822', '#043869', 
         '#e02f80', '#ff9339', '#ffd939', '#24b23d', '#07447f',
         '#E65899', '#ffaa64', '#ffe164', '#46c05c', '#0b549a',
         '#b50052'
      ] }};
  }

  ngOnInit() {
  
   }

   // '#DD0066', '#FF7400' , 

}
