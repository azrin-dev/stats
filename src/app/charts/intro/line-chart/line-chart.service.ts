import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {

   dataY: number = 0;

   dataSource = new BehaviorSubject(this.dataY);
   dataYasObs = this.dataSource as Observable<number>;

  constructor(
     private http: HttpClient
  ) { }

  startGenerator(){

      var CIRCLES = 2 * Math.PI;

      // Parameters
      var A = 0.1; // Amplitude
      var v = 5000 * CIRCLES; // Half a circle per second
      var start = 1;
      var k = 0; // Offset
      
      var t = 1;
      var posY = A * Math.sin(v*t) + k;
      let Y = posY;
      this.dataSource.next(Y);
   
  }

  getFakeData()
  {
     return this.http.get('https://my-json-server.typicode.com/typicode/demo/db');
  }
}
