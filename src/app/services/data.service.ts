import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  api: string = 'https://rest-on-demand.herokuapp.com/api/'

  constructor(public http: Http) {
  }

  getAll(type) {
    return this.http.get(this.api + type).map(res => res.json())
  }

  delete(type, pedido) {
    return this.http.delete(this.api + type + '/' + pedido._id)
      .map(success => success.status);
  }

  update(type, pedido) {
    return this.http.put(this.api + type + '/' + pedido._id, pedido)
      .map(res => res.json())
  }

  save(type, pedido) {
    return this.http.post(this.api + type, pedido)
      .map(res => res.json())
  }

}
