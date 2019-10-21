import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx'
const HEADER = { headers: new HttpHeaders({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Order {
  id: Number,
  products: [ {
    id: Number,
    price : Number,
    name : String,
    desc : String,
    img : String
  }]
}

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: HttpClient) {}
  getOrdersHistory() {
    return this.http.get('http://localhost:3000/orders', HEADER)
      .map((res: Response) => res)
      
      .catch(this.handleError)
      
      
  }
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json()|| ' Server Error ');
  }
}
