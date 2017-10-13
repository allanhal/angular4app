import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('DataService connect')
  }

  getPedidos() {
    return this.http.get('https://rest-on-demand.herokuapp.com/api/pedido').map(res => res.json())
  }

  getApi(type) {
    return this.http.get('https://rest-on-demand.herokuapp.com/api/' + type).map(res => res.json())
  }

}
