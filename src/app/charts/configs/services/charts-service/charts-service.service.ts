import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(
     private http: HttpClient
  ) { }

  linear(datas){
     return this.http.post('/api/charts/regression/linear', datas);
  }
}
