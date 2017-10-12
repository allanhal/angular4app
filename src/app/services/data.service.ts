import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
// import 'rxjs

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('DataService connect')
  }

  getPedidos() {
    this.http.get('https://rest-on-demand.herokuapp.com/api/pedido')
  }

}
