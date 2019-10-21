import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
const HEADER = { headers: new Headers({ 'Authentication': 'AFDSSASDF123512' }) };

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

  constructor(private http: Http) {}
  getOrdersHistory() {
    return this.http.get('http://localhost:3000/orders', HEADER)
      .map(res => res.json())
      .catch(this.handleError)
      
  }
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json()|| ' Server Error ');
  }
}
